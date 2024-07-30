import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const NewsFeedCard = ({ title, description, image, date }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        {image && (
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
          />
        )}
        <CardContent style={{height: '350px', overflowY: 'scroll'}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsFeedCard;