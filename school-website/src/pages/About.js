import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Container maxWidth="lg">
        
        {/* School History Section */}
        <section className="history-section">
          <Typography variant="h4" gutterBottom>
            Our History
          </Typography>
          <Typography variant="body1" paragraph>
            [School Name] was founded in [Year], with a vision to create a nurturing environment for young minds to grow, learn, and excel. Since our inception, we have been dedicated to providing a high-quality education that balances academics, personal development, and community engagement.
          </Typography>
        </section>

        {/* Mission & Vision Section */}
        <section className="mission-vision-section">
          <Typography variant="h4" gutterBottom>
            Our Mission & Vision
          </Typography>
          <Typography variant="h6" gutterBottom>
            Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to provide an inclusive and stimulating environment that fosters intellectual growth, creativity, and character building in every student.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Vision
          </Typography>
          <Typography variant="body1" paragraph>
            We envision a future where every child is empowered with the knowledge and skills to make a positive impact in their communities and beyond.
          </Typography>
        </section>

        {/* Leadership Team Section */}
        <section className="leadership-section">
          <Typography variant="h4" gutterBottom>
            Leadership Team
          </Typography>
          <Grid container spacing={4}>
            {/* Leadership member 1 */}
            <Grid item xs={12} md={4}>
              <div className="leader">
                <Typography variant="h6">
                  Principal - John Doe
                </Typography>
                <Typography variant="body2">
                  John Doe has been the principal of [School Name] for over 10 years, guiding the school through numerous achievements and setting a high standard for academic excellence.
                </Typography>
              </div>
            </Grid>

            {/* Leadership member 2 */}
            <Grid item xs={12} md={4}>
              <div className="leader">
                <Typography variant="h6">
                  Vice Principal - Jane Smith
                </Typography>
                <Typography variant="body2">
                  Jane Smith oversees student development and leads various school initiatives aimed at improving student well-being and engagement.
                </Typography>
              </div>
            </Grid>

            {/* Leadership member 3 */}
            <Grid item xs={12} md={4}>
              <div className="leader">
                <Typography variant="h6">
                  Director of Curriculum - Dr. Emily Johnson
                </Typography>
                <Typography variant="body2">
                  Dr. Emily Johnson has revolutionized the curriculum at [School Name], incorporating modern teaching methodologies and technologies to enhance the learning experience.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  );
};

export default About;
