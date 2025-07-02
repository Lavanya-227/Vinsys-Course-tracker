import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProgress = () => {
    const { courseName: encodedCourseName } = useParams(); // Get the URL parameter
    const navigate = useNavigate();

    const courseName = decodeURIComponent(encodedCourseName); // Decode the course name from URL

    // State for form fields
    const [currentModule, setCurrentModule] = useState('');
    const [hoursSpent, setHoursSpent] = useState('');
    const [percentage, setPercentage] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        let currentUser = null;
        try {
            if (storedUser) {
                currentUser = JSON.parse(storedUser);
            }
        } catch (err) {
            console.error("Error parsing currentUser from localStorage:", err);
            setError("Failed to load user data. Please log in again.");
            setLoading(false);
            return;
        }

        if (!currentUser || !currentUser.progress) {
            setError("User data or progress data not found. Redirecting to dashboard.");
            setLoading(false);
            // Optionally navigate back or to login
            navigate('/dashboard'); 
            return;
        }

        const courseData = currentUser.progress[courseName];

        if (courseData) {
            // Pre-fill form fields with existing data, handling DynamoDB attribute types
            setCurrentModule(courseData['current module']?.S || '');
            setHoursSpent(courseData['Hour spend']?.N || '');
            setPercentage(courseData.percentage?.N || '');
            setNotes(courseData.note?.S || '');

            // Format date for HTML input type="date"
            if (courseData.lastUpdated?.S) {
                const dateObj = new Date(courseData.lastUpdated.S);
                // Ensure date is valid before formatting
                if (!isNaN(dateObj.getTime())) {
                    setDate(dateObj.toISOString().split('T')[0]); // YYYY-MM-DD
                } else {
                    setDate(''); // Invalid date, set empty
                }
            } else {
                setDate(new Date().toISOString().split('T')[0]); // Default to current date if no lastUpdated
            }
        } else {
            setError(`Course "${courseName}" not found in your progress. You can add it.`);
            // Optionally set default values for a new entry or clear form
            setCurrentModule('');
            setHoursSpent('');
            setPercentage('');
            setNotes('');
            setDate(new Date().toISOString().split('T')[0]); // Default to current date
        }
        setLoading(false);
    }, [courseName, navigate]); // Depend on courseName and navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Basic validation
        if (!currentModule || !percentage || !hoursSpent || !date) {
            setError('Please fill in all required fields (Current Module, Progress %, Hours Spent, Date).');
            return;
        }
        if (isNaN(parseFloat(hoursSpent)) || parseFloat(hoursSpent) < 0) {
            setError('Hours Spent must be a non-negative number.');
            return;
        }
        if (isNaN(parseInt(percentage)) || parseInt(percentage) < 0 || parseInt(percentage) > 100) {
            setError('Progress % must be a number between 0 and 100.');
            return;
        }

        const storedUser = localStorage.getItem("currentUser");
        let currentUser = null;
        try {
            if (storedUser) {
                currentUser = JSON.parse(storedUser);
            }
        } catch (err) {
            console.error("Error parsing currentUser:", err);
            setError("Failed to retrieve user data for update.");
            return;
        }

        if (!currentUser) {
            setError("User not logged in. Please log in to update progress.");
            navigate('/user-login');
            return;
        }

        // Prepare the updated course data in DynamoDB format
        const updatedCourseData = {
            lastUpdated: { S: new Date().toISOString() }, // Update timestamp to now
            'current module': { S: currentModule },
            percentage: { N: String(percentage) }, // Store as string for 'N' type
            'Hour spend': { N: String(hoursSpent) }, // Store as string for 'N' type
            note: { S: notes || '' }
        };

        // Ensure progress map exists
        if (!currentUser.progress) {
            currentUser.progress = {};
        }
        currentUser.progress[courseName] = updatedCourseData;

        // Save updated user data back to localStorage
        try {
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            alert('Progress updated successfully!'); // Use a custom modal in a real app
            navigate('/dashboard'); // Go back to dashboard after update
        } catch (saveError) {
            console.error("Error saving updated user data to localStorage:", saveError);
            setError("Failed to save progress. Please try again.");
        }
    };

    const handleCancel = () => {
        navigate('/dashboard'); // Go back to dashboard without saving
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-xl text-gray-700">Loading course data...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-['Inter']">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                    Update Progress for <br className="sm:hidden" /><span className="text-indigo-600">{courseName}</span>
                </h2>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative mb-4" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline ml-2">{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                        <input
                            type="text"
                            id="courseName"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 cursor-not-allowed focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={courseName}
                            readOnly
                            disabled
                        />
                    </div>

                    <div>
                        <label htmlFor="currentModule" className="block text-sm font-medium text-gray-700 mb-1">Current Module/Topic <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="currentModule"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={currentModule}
                            onChange={(e) => setCurrentModule(e.target.value)}
                            placeholder="e.g., Arrays and Objects"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="hoursSpent" className="block text-sm font-medium text-gray-700 mb-1">Hours Spent <span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            id="hoursSpent"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={hoursSpent}
                            onChange={(e) => setHoursSpent(e.target.value)}
                            placeholder="e.g., 2.5"
                            step="0.1"
                            min="0"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 mb-1">Progress % <span className="text-red-500">*</span></label>
                        <input
                            type="number"
                            id="percentage"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                            placeholder="e.g., 75"
                            min="0"
                            max="100"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date <span className="text-red-500">*</span></label>
                        <input
                            type="date"
                            id="date"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                        <textarea
                            id="notes"
                            rows="3"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Add any notes about your progress..."
                        ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="w-full sm:w-auto px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            Update Progress
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProgress;
