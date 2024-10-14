import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Custom Material UI theme
import Navbar from './components/Navbar'; // Navbar for all pages
import Footer from './components/Footer'; // Footer for all pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import Contact from './pages/Contact';
import NewsEvents from './pages/NewsEvents'; // For News and Events page
import Resources from './pages/Resources';   // Resources page
import LoginPortal from './pages/LoginPortal'; // Login page
import ParentDashboard from './pages/ParentDashboard';
import StaffDashboard from './pages/StaffDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ParentPortal from './pages/ParentPortal'; // Correct path for Parent login portal
import StaffPortal from './pages/StaffPortal';   // Correct path for Staff login portal
import AdminPortal from './pages/AdminPortal';   // Correct path for Admin login portal
import PrivateRoute from './components/PrivateRoute'; // For protected routes like dashboards
import NotFound from './pages/NotFound'; // 404 page for invalid routes
import Events from './pages/Events'; // Importing Events page
import Gallery from './pages/Gallery'; // Importing Gallery page

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Navbar displayed globally */}
        <Navbar />

        {/* Main Content - Routing Logic */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<LoginPortal />} />
          
          {/* New Routes for Events and Gallery */}
          <Route path="/events" element={<Events />} /> {/* Adding Events route */}
          <Route path="/gallery" element={<Gallery />} /> {/* Adding Gallery route */}

          {/* Portals - Role-Based Access */}
          <Route path="/parent-portal" element={<ParentPortal />} />
          <Route path="/staff-portal" element={<StaffPortal />} />
          <Route path="/admin-portal" element={<AdminPortal />} />

          {/* Protected Routes for Dashboards - Accessible after login */}
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

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer displayed globally */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
