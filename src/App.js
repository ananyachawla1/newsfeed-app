import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsFeed from './components/NewsFeed';
import { CssBaseline } from '@mui/material';
import ChatbotPopup from './components/ChatbotPopup';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <main>
        <NewsFeed />
        <ChatbotPopup/>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;