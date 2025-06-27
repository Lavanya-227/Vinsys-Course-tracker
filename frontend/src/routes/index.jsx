import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other routes here */}
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
