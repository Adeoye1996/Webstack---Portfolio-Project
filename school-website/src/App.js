import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'; // Assuming you are using Material UI's theme
import theme from './theme'; // Import your theme if applicable
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home'; // Import Home component
import About from './pages/About'; // Import About component
import Academics from './pages/Academics'; // Import Academics component
import Admissions from './pages/Admissions'; // Import Admissions component
import StudentLife from './pages/StudentLife'; // Import Student Life component
import Contact from './pages/Contact'; // Import Contact component
import LoginPortal from './pages/LoginPortal'; // Import Login Portal
import ParentDashboard from './pages/ParentDashboard'; // Import Parent Dashboard
import StaffDashboard from './pages/StaffDashboard'; // Import Staff Dashboard
import AdminDashboard from './pages/AdminDashboard'; // Import Admin Dashboard
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute for protected routes

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Navbar that will be displayed on all pages */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPortal />} />

          {/* Protected Routes (only accessible if authenticated) */}
          <Route
            path="/parent-dashboard"
            element={
              <PrivateRoute>
                <ParentDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/staff-dashboard"
            element={
              <PrivateRoute>
                <StaffDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>

        {/* Footer that will be displayed on all pages */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
