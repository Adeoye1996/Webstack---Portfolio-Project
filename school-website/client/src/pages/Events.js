import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import './Events.css'; // Assuming you'll create a separate CSS file for styling if needed

const eventsData = [
  {
    title: "Annual Science Fair",
    date: "November 15, 2024",
    description: "Our science fair showcases innovative projects by students across all grades. Join us to celebrate creativity and learning!",
    image: `${process.env.PUBLIC_URL}/assets/science-fair.jpg`,
  },
  {
    title: "Sports Day",
    date: "December 10, 2024",
    description: "A day filled with sporting events and activities that promote physical fitness and teamwork among students.",
    image: `${process.env.PUBLIC_URL}/assets/sports-day.jpg`,
  },
  {
    title: "Music Concert",
    date: "January 25, 2025",
    description: "An evening of musical performances by our talented students, showcasing their skills and dedication.",
    image: `${process.env.PUBLIC_URL}/assets/music-concert.jpg`,
  },
];

function Events() {
  return (
    <div className="events-page">
      <Container maxWidth="lg">
        {/* Heading Section */}
        <Typography variant="h3" className="events-heading" gutterBottom>
          Upcoming Events
        </Typography>
        <Typography variant="body1" className="events-intro">
          Stay up-to-date with our latest school events. From academic fairs to sports days, there's always something exciting happening at Yetma ICT School.
        </Typography>

        {/* Events Grid */}
        <Grid container spacing={4} className="events-grid">
          {eventsData.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="event-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={`Image for ${event.title}`}
                />
                <CardContent>
                  <Typography variant="h5" className="event-title" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {event.date}
                  </Typography>
                  <Typography variant="body1" className="event-description">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Events;
