import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body1">Your footer content here.</Typography>
        <Typography variant="body2" color="text.secondary">
          {'© '}
          {new Date().getFullYear()}
          {' Your Website'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;