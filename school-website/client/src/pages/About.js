import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      {/* School History Section */}
      <Typography variant="h3" className="about-title">Our History</Typography>
      <Typography variant="body1" className="about-text">
        A Legacy of Excellence: Empowering Future Generations<br><br>
Established in 2024, our school has a long-standing tradition of academic excellence, innovation, and community service.<br><br> As a leading institution in ICT education, we have consistently delivered high-quality programs, fostering a culture of intellectual curiosity, creativity, and critical thinking.<br><br>
Our Mission<br><br>
At Yetma ICT School, we are committed to providing a transformative educational experience that prepares students for success in an ever-evolving technological landscape.<br><br> Our mission is to:
Foster a love of learning and intellectual exploration<br><br>
Develop skilled, knowledgeable, and socially responsible individuals<br><br>
Cultivate creativity, innovation, and entrepreneurship<br><br>
Provide a supportive community that promotes diversity, equity, and inclusion<br><br>
Academic Programs<br><br>
Our comprehensive curriculum includes:<br><br>
ICT programs (Software Development, Data Science, Cybersecurity)<br><br>
STEM courses (Mathematics, Physics, Chemistry)<br><br>
Business and Entrepreneurship studies<br><br>
Language and Communication courses<br><br>
Arts and Humanities electives<br><br>
State-of-the-Art Facilities<br><br>
Our modern campus features:<br><br>
Advanced computer labs and multimedia classrooms<br><br>
Collaborative workspaces and project-based learning areas<br><br>
Virtual reality and augmented reality studios<br><br>
Makerspaces for hands-on innovation<br><br>
Extensive library and research resources<br><br>
Extracurricular Opportunities<br><br>
Beyond academics, we offer:<br><br>
Clubs and organizations (Robotics, Coding, Debate, Music, Drama)
Sports teams (Basketball, Soccer, Volleyball)
Community service initiatives and volunteer programs
Industry partnerships and internship opportunities<br><br>
Distinguished Faculty<br><br>
Our expert faculty comprises experienced educators, researchers, and industry professionals who:
Provide personalized attention and mentorship
Develop innovative curricula and teaching methods
Conduct cutting-edge research and publications
Foster industry connections and networking opportunities<br><br>
Alumni Success<br><br>
Our graduates have achieved remarkable success in various fields, including:
Tech industry leaders and entrepreneurs
Innovative researchers and scientists
Creative professionals and artists
Social entrepreneurs and community leaders
Join Our Community<br><br>
If you share our passion for academic excellence, innovation, and community service, join us at Yetma ICT School. Together, let's empower the next generation of leaders, thinkers, and change-makers.<br><br>
Contact Us<br><br>
Email: abdulazeezbabatunde10@gmail.com<br><br>
Phone: +2349147678028<br><br>
Website: yetmaictschool.edu<br><br>
Address: No28 aderoju street tanke ilorin kwara state.<br><br>
Schedule a Tour <br><br>
Experience our campus firsthand and discover why Yetma ICT School is the ideal choice for your educational journey.
      </Typography>

      {/* Mission and Vision */}
      <Typography variant="h4" className="about-title">Mission and Vision</Typography>
      <Typography variant="body1" className="about-text">
        Empowering the Future: Our Mission
Our mission at Yetma ICT School is to provide quality education that nurtures the next generation of leaders, innovators, and change-makers.<br><br> We are committed to creating a cutting-edge environment for technology education, fostering intellectual curiosity, creativity, and critical thinking.<br><br>
Visionary Education<br><br>
We envision a future where technology seamlessly integrates with society, driving progress and improvement.<br><br> To achieve this, we:
Provide student-centered learning experiences<br><br>
Foster collaboration, creativity, and problem-solving<br><br>
Develop essential skills for the digital age<br><br>
Encourage innovation, entrepreneurship, and social responsibility<br><br>
Advanced Technology Education<br><br>
Our state-of-the-art facilities and expert faculty ensure students receive:<br><br>
Comprehensive ICT programs (Software Development, Data Science, Cybersecurity)<br><br>
STEM courses (Mathematics, Physics, Chemistry)<br><br>
Business and Entrepreneurship studies<br><br>
Language and Communication courses<br><br>
Arts and Humanities electives<br><br>
Cutting-Edge Resources<br><br>
Our campus features:<br><br>
Advanced computer labs and multimedia classrooms
Virtual reality and augmented reality studios<br><br>
Makerspaces for hands-on innovation<br><br>
Extensive library and research resources<br><br>
Industry-leading software and hardware<br><br>
Experiential Learning<br><br>
We bridge the gap between theory and practice through:
Internships and industry partnerships<br><br>
Project-based learning and hackathons<br><br>
Mentorship programs and career guidance<br><br>
Entrepreneurship incubators and accelerators<br><br>
Holistic Development<br><br>
Beyond academics, we focus on:
Emotional intelligence and well-being<br><br>
Teamwork and leadership skills<br><br>
Community service and social responsibility<br><br>
Cultural diversity and global perspectives<br><br>
Distinguished Faculty<br><br>
Our expert faculty comprises:
Experienced educators and researchers<br><br>
Industry professionals and thought leaders<br><br>
Passionate mentors and role models<br><br>
Alumni Network<br><br>
Our graduates join a vibrant community of:
Tech industry leaders and entrepreneurs
Innovative researchers and scientists
Creative professionals and artists
Social entrepreneurs and community leaders
Join Our Community<br><br>
If you share our passion for visionary education and technology innovation, join us at Yetma ICT School. Together, let's empower the next generation to shape a brighter future.
Contact Us<br><br>
Email: abdulazeebabatunde10@gmail.com<br><br>
Phone: +2349167067700<br><br>
Website: yetmaictschool.edu<br><br>
Address: no28 aderoju close tanke ilorin<br><br>
Schedule a Tour<br><br>
Experience our campus firsthand and discover why Yetma ICT School is the ideal choice for your educational journey.
      </Typography>

      {/* Leadership Team Section */}
      <Typography variant="h4" className="about-title">Leadership Team</Typography>
      <Grid container spacing={4} className="leadership-section">
        <Grid item xs={12} sm={4}>
          <div className="leadership-card">
            <img src={`${process.env.PUBLIC_URL}/assets/team1.jpg`} alt="Leader 1" className="leader-image" />
            <Typography variant="h5">Abdulrazak Abdulazeez</Typography>
            <Typography variant="body2">School Principal</Typography>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="leadership-card">
            <img src={`${process.env.PUBLIC_URL}/assets/team2.jpg`} alt="Leader 2" className="leader-image" />
            <Typography variant="h5">Jane Smith</Typography>
            <Typography variant="body2">Vice Principal</Typography>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="leadership-card">
            <img src={`${process.env.PUBLIC_URL}/assets/team3.jpg`} alt="Leader 3" className="leader-image" />
            <Typography variant="h5">Muniroh Eniola</Typography>
            <Typography variant="body2">Director of Education</Typography>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
