import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

// Background images for the slideshow
const images = [
  `${process.env.PUBLIC_URL}/assets/go.jpg`,
  `${process.env.PUBLIC_URL}/assets/let.jpg`,
  `${process.env.PUBLIC_URL}/assets/hope.jpg`
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change background image every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <Container maxWidth="lg">

        {/* Background image section with heading */}
        <div className="background-section" style={{ backgroundImage: `url(${images[currentImage]})` }}>
          <Typography variant="h2" className="heading">Welcome to Our School</Typography>
          <Button variant="contained" color="primary" href="/about">Learn More</Button>
        </div>

        {/* Introduction Section */}
        <section className="introduction">
          <Typography variant="h3" gutterBottom>
            Welcome to Yetma Ict School
          </Typography>
          <Typography variant="body1">
            At Yetma ICT School, we are dedicated to nurturing young minds and empowering the leaders of tomorrow.<br /><br /> 
            Our institution is built on the foundation of innovation, creativity, and excellence, providing a stimulating environment that fosters intellectual curiosity and growth.<br /><br />
            Our expert faculty, state-of-the-art facilities, and cutting-edge curriculum are designed to equip students with the skills and knowledge necessary to thrive in an ever-evolving technological landscape. We offer a comprehensive range of ICT programs, from foundational courses to advanced specializations, ensuring our graduates are well-prepared for successful careers.<br /><br />
            Beyond academics, we prioritize character development, encouraging teamwork, problem-solving, and critical thinking. Our extracurricular activities and community engagement programs help shape well-rounded individuals with a strong sense of social responsibility.<br /><br />
            At Yetma ICT School, we believe that every student has the potential to make a meaningful impact. Our supportive community, mentorship initiatives, and industry connections provide students with the resources and networks needed to turn their visions into reality.<br /><br />
            Join us at Yetma ICT School, where we inspire innovation, foster creativity, and empower the next generation of leaders to shape a brighter future. Together, let's unlock the possibilities of tomorrow.<br /><br />
          </Typography>
        </section>

        {/* School Information Section */}
        <Grid container spacing={4} className="school-info-section">
          <Grid item xs={12} sm={4}>
            <div className="info-card">
              <Typography variant="h4" className="info-title">Early Years</Typography>
              <Typography variant="body1" className="info-description">Nurturing young minds with care and curiosity.</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="info-card">
              <Typography variant="h4" className="info-title">Primary Years</Typography>
              <Typography variant="body1" className="info-description">Building strong foundations for lifelong learning.</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="info-card">
              <Typography variant="h4" className="info-title">Secondary Years</Typography>
              <Typography variant="body1" className="info-description">Preparing students for the challenges of tomorrow.</Typography>
            </div>
          </Grid>
        </Grid>

        {/* Features Section */}
        <section className="features">
          <Grid container spacing={4}>
            {/* News Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Latest News</Typography>
              <Typography variant="body2">Stay updated with the latest happenings in our school.</Typography>
            </Grid>

            {/* Events Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Upcoming Events</Typography>
              <Typography variant="body2">Check out the upcoming school events and participate!</Typography>
            </Grid>

            {/* Testimonials Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Testimonials</Typography>
              <div className="testimonials">
                <div className="testimonial">
                  <Typography variant="body1">
                    "The school provided an excellent learning environment, exceeding my expectations in every way.<br /><br /> 
                    The state-of-the-art facilities, comprehensive curriculum, and exceptional faculty created a stimulating atmosphere that fostered academic excellence.<br /><br /> 
                    Interactive classes, engaging discussions, and hands-on training equipped me with practical skills and knowledge.<br /><br /> 
                    The supportive staff and diverse student body made me feel at home.<br /><br /> 
                    I appreciated the emphasis on critical thinking, creativity, and problem-solving.<br /><br /> 
                    Overall, my experience at Yetma ICT School was enriching, empowering, and unforgettable.<br /><br /> 
                    I'm confident that the skills I gained will serve me well in my future endeavors."
                  </Typography>
                  <Typography variant="caption">- Parent of Grade 5 student</Typography>
                </div>
                <div className="testimonial">
                  <Typography variant="body1">
                    "I had an incredible experience at Yetma ICT School.<br /><br /> 
                    The amazing faculty and staff created a supportive and stimulating environment that made learning enjoyable and rewarding.<br /><br /> 
                    Their expertise, guidance, and encouragement helped me grow both personally and professionally.<br /><br /> 
                    I cherished every moment, from engaging lectures to valuable networking opportunities.<br /><br /> 
                    The school's commitment to excellence and innovation is evident in every aspect.<br /><br /> 
                    I'm grateful for the skills, knowledge, and lifelong connections I gained.<br /><br /> 
                    Yetma ICT School will always hold a special place in my heart. I highly recommend it to anyone seeking a transformative educational experience."
                  </Typography>
                  <Typography variant="caption">- Alumni Student</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>

        {/* Welcome Speech Section */}
        <div className="welcome-section">
          <Typography variant="h3" className="welcome-title">A Message from the School Head</Typography>
          <img src={`${process.env.PUBLIC_URL}/assets/schoolhead.jpg`} alt="School Head" className="school-head-image" />
          <Typography variant="body1" className="welcome-text">
            We are proud to offer a nurturing and academically challenging environment at Yetma ICT School, where students can grow, explore, and reach their full potential.<br /><br /> 
            Our institution is dedicated to providing a well-rounded education that fosters intellectual curiosity, creativity, and critical thinking.<br /><br />
            {/* Rest of the content... */}
          </Typography>
          <Button variant="contained" color="secondary" href="/admissions">Apply Now</Button>
        </div>

        {/* Latest News Section */}
        <div className="news-section">
          <Typography variant="h3">Latest News</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className="news-card">
                <Typography variant="h5">School Reopening</Typography>
                <Typography variant="body2">
                  "Important Update: Our school will reopen on December 20th, marking the beginning of a new academic year!<br /><br /> 
                  We welcome back students, faculty, and staff, and look forward to a year filled with learning, growth, and achievement.<br /><br /> 
                  Prepare for an exciting semester! Check our website for orientation details and updates."
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="news-card">
                <Typography variant="h5">New Extracurricular Programs</Typography>
                <Typography variant="body2">
                  Introducing New Extracurricular Activities at Yetma ICT School...<br /><br />
                  {/* Rest of the content... */}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Call to Action Links */}
        <section className="cta-section">
          <Typography variant="h4" gutterBottom>Get Involved Today</Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/about">Learn More About Us</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/admissions">Admissions</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/events">View Upcoming Events</Button>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  );
};

export default Home;
