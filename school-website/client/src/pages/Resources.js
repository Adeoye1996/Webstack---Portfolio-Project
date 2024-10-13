import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Resources() {
  const resources = ['Library', 'Counseling Services', 'Career Guidance'];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Resources
      </Typography>
      <Typography variant="body1" paragraph>
        Our school provides a variety of resources to help students succeed in their academic and personal lives.
      </Typography>
      <List>
        {resources.map((resource) => (
          <ListItem key={resource}>
            <ListItemText primary={resource} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Resources;
