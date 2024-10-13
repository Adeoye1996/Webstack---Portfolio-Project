import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import axios from 'axios';
import './Courses.css'; // Import the CSS file for styling

function Courses() {
  const [courses, setCourses] = useState([]);

  // Static course data in case the API fails
  const staticCourses = [
    { id: 1, name: 'Math 101', description: 'Basic mathematics principles' },
    { id: 2, name: 'Physics 201', description: 'Introduction to Physics' },
  ];

  // Fetch course data from the API when the component loads
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/school/courses'); // Update the API URL with full path
        setCourses(response.data); // Store the course data in the state
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCourses(staticCourses); // Use static data if API call fails
      }
    };
    fetchCourses(); // Call the fetchCourses function when the page loads
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Courses
      </Typography>
      
      <Grid container spacing={3}>
        {courses.length > 0 ? (
          courses.map((course) => (
            <Grid item key={course.id} xs={12} md={6}>
              <Card className="course-card">
                <CardContent>
                  <Typography variant="h5" color="primary">{course.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{course.description}</Typography>
                  <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No courses available</Typography>
        )}
      </Grid>
    </Container>
  );
}

export default Courses;
