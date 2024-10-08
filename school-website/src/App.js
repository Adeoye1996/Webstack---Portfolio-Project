import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom Material UI theme
import Navbar from './components/Navbar'; // Navbar for all pages
import Footer from './components/Footer'; // Footer for all pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import Contact from './pages/Contact';
import NewsEvents from './pages/NewsEvents'; // Import NewsEvents page
import Resources from './pages/Resources';   // Import Resources page
import LoginPortal from './pages/LoginPortal'; // Assuming you are using this for the login page
import ParentDashboard from './pages/ParentDashboard';
import StaffDashboard from './pages/StaffDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute'; // For protected routes like dashboards

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Navbar displayed globally */}
        <Navbar />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<NewsEvents />} /> {/* Updated path for NewsEvents */}
          <Route path="/resources" element={<Resources />} />   {/* Added Resources route */}
          <Route path="/login" element={<LoginPortal />} />

          {/* Protected Routes for dashboards */}
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

        {/* Footer displayed globally */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
