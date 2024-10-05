import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
