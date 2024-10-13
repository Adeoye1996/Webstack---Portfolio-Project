import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function StudentLife() {
  const activities = ['Football Club', 'Drama Society', 'Coding Club', 'Science Fair'];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Student Life
      </Typography>
      <Typography variant="body1" paragraph>
        Our school offers a vibrant student life with a wide range of extracurricular activities and clubs.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Extracurricular Activities:
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity}>
            <ListItemText primary={activity} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default StudentLife;
