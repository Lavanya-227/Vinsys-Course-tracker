# Vinsys Course tracker

## Description: 
A web app to track learner progress in VINSYS’s training courses.

## Features:
-	Progress entry (course, module, status).
-	Progress dashboard for users.
-	Admin dashboard for generating reports.
-	User authentication.
-	PDF progress reports.

## AWS Services:
-	S3: Host React frontend (static site) and store PDF reports.
-	Lambda: Serverless APIs for progress tracking.
-	API Gateway: API routing.
-	DynamoDB: Store progress and user data.
-	CloudWatch: Monitor Lambda performance.
-	Tech Stack: React (frontend), Node.js/Lambda (backend), DynamoDB (database).
-	Deliverable: Live progress tracker with 5 sample progress entries, hosted on S3.
-	Success Criteria: Users can track progress, admins can generate reports, and PDFs can be exported.

## Project Structure
course-tracker/
├── frontend/                     # React JS + Tailwind CSS
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .env                      # VITE_BACKEND_URL
│
├── backend/                      # Node.js + Express + MongoDB
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env                      # MONGO_URI, JWT_SECRET
│
├── .gitignore
├── README.md
