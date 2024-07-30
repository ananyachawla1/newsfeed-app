import React, { useState } from 'react';
import {
  Box,
  Fab,
  Paper,
  Typography,
  IconButton,
  TextField,
  Button,
  Slide,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const ChatbotPopup = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  return (
    <Box>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={handleToggle}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <ChatIcon />
      </Fab>
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          elevation={4}
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 16,
            width: 300,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            <Typography variant="h6">Chatbot</Typography>
            <IconButton color="inherit" onClick={handleToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              bgcolor: '#f5f5f5',
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  mb: 1,
                  p: 1,
                  borderRadius: 1,
                  bgcolor: msg.sender === 'user' ? 'primary.light' : 'grey.300',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <Typography variant="body2">{msg.text}</Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              p: 2,
              borderTop: '1px solid #e0e0e0',
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              sx={{ mr: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Slide>
    </Box>
  );
};

export default ChatbotPopup;