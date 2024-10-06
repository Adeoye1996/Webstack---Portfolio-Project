import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);

  // Fetch course data from the API when the component loads
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('/api/school/courses');
      setCourses(response.data);  // Store the course data in the state
    };
    fetchCourses();  // Call the fetchCourses function when the page loads
  }, []);

  return (
    // Main container for the Courses page
    <Container>
      {/* Page heading */}
      <Typography variant="h3" component="h1" gutterBottom>
        Our Courses
      </Typography>
      {/* List of courses */}
      <List>
        {courses.map((course) => (
          // ListItem component to display each course
          <ListItem key={course._id}>
            {/* Course title and description */}
            <ListItemText
              primary={course.title}
              secondary={`${course.description} (Duration: ${course.duration}, Fee: $${course.fee})`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Courses;
