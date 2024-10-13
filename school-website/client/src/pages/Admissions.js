import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import './Admissions.css';

const Admissions = () => {
  return (
    <Container className="admissions-container">
      <Typography variant="h3" className="admissions-title">Admissions Process</Typography>
      <Typography variant="body1" className="admissions-text">
        Our admissions process is designed to be simple and straightforward. Follow these steps to apply...
      </Typography>

      {/* Application Process */}
      <div className="process-section">
        <Typography variant="h4" className="admissions-title">Steps to Apply</Typography>
        <ul>
          <li>Submit the online application form</li>
          <li>Attend an interview with our admissions team</li>
          <li>Submit all required documents (birth certificate, previous school records, etc.)</li>
          <li>Receive an offer letter</li>
          <li>Pay the tuition fees</li>
        </ul>
      </div>

      {/* Fees and Requirements */}
      <div className="fees-section">
        <Typography variant="h4" className="admissions-title">Fees and Requirements</Typography>
        <Typography variant="body1" className="admissions-text">
          The tuition fees for the academic year are as follows...
        </Typography>
        <ul>
          <li>Early Years: $5,000 per year</li>
          <li>Primary Years: $6,000 per year</li>
          <li>Secondary Years: $7,500 per year</li>
        </ul>
      </div>

      <Button variant="contained" color="primary" href="/apply">Apply Now</Button>
    </Container>
  );
};

export default Admissions;
