import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

const blogPosts = [
  {
    title: 'School Reopening Dates',
    date: 'October 10, 2024',
    summary: 'Our school will reopen for the fall semester on October 10th, with a full schedule of exciting activities planned.',
  },
  {
    title: 'Student Leadership Elections',
    date: 'November 2, 2024',
    summary: 'Elections for the Student Council leadership positions will take place in November. Students are encouraged to participate.',
  },
  {
    title: 'Winter Break Announcement',
    date: 'December 15, 2024',
    summary: 'Our winter break will begin on December 20th, so please ensure all assignments are completed before the holidays.',
  }
];

const upcomingEvents = [
  {
    title: 'Science Fair',
    date: 'October 25, 2024',
  },
  {
    title: 'Parent-Teacher Conference',
    date: 'November 5, 2024',
  },
  {
    title: 'Winter Sports Day',
    date: 'December 12, 2024',
  }
];

const NewsEvents = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Blog Section */}
      <Typography variant="h4" gutterBottom>
        Latest News
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography color="textSecondary" gutterBottom>{post.date}</Typography>
                <Typography>{post.summary}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Events Section */}
      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Upcoming Events
      </Typography>
      <Grid container spacing={4}>
        {upcomingEvents.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography color="textSecondary">
                  <CalendarToday sx={{ mr: 1 }} />
                  {event.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsEvents;
