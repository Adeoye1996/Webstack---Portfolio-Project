import React from 'react';
import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material';
import './Admission.css';

const Admission = () => {
  return (
    <div className="admission-page">
      <Container maxWidth="lg">
        
        {/* Admission Process Section */}
        <section className="admission-process-section">
          <Typography variant="h4" gutterBottom>
            Admission Process
          </Typography>
          <Typography variant="body1" paragraph>
            Our admission process is designed to be straightforward and transparent. Follow the steps below to apply:
          </Typography>
          <Typography variant="body1" paragraph>
            1. Complete the online application form (below).
          </Typography>
          <Typography variant="body1" paragraph>
            2. Submit the required documents.
          </Typography>
          <Typography variant="body1" paragraph>
            3. Attend an interview with the admission committee.
          </Typography>
          <Typography variant="body1" paragraph>
            4. Receive your admission decision within 2 weeks of the interview.
          </Typography>
        </section>

        {/* Admission Requirements Section */}
        <section className="admission-requirements-section">
          <Typography variant="h4" gutterBottom>
            Admission Requirements
          </Typography>
          <Typography variant="body1" paragraph>
            To apply for admission, please ensure you meet the following requirements:
          </Typography>
          <Typography variant="body1" paragraph>
            - Completed application form
          </Typography>
          <Typography variant="body1" paragraph>
            - Birth certificate or valid identification
          </Typography>
          <Typography variant="body1" paragraph>
            - Previous academic records (if applicable)
          </Typography>
          <Typography variant="body1" paragraph>
            - Recommendation letter (optional)
          </Typography>
        </section>

        {/* Tuition and Fees Section */}
        <section className="fees-section">
          <Typography variant="h4" gutterBottom>
            Tuition & Fees
          </Typography>
          <Typography variant="body1" paragraph>
            Our tuition and fees are designed to be affordable and flexible. Scholarships are also available for qualifying students.
          </Typography>
          <Typography variant="body1" paragraph>
            - Annual Tuition Fee: $10,000
          </Typography>
          <Typography variant="body1" paragraph>
            - Registration Fee: $500 (one-time)
          </Typography>
          <Typography variant="body1" paragraph>
            - Payment Plans Available
          </Typography>
        </section>

        {/* Application Form Section */}
        <section className="application-form-section">
          <Typography variant="h4" gutterBottom>
            Apply Now
          </Typography>
          <Typography variant="body1" paragraph>
            Complete the form below to start your admission process:
          </Typography>

          <form className="application-form">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Why do you want to join our school?"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </form>
        </section>
      </Container>
    </div>
  );
};

export default Admission;
