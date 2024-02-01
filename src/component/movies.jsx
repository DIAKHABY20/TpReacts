import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import moviesData from './movies.json'

export default function MoviesList() {
  

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {moviesData.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/1.jpeg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${value.titre}`} />
              <ListItemText id={labelId} primary={`${value.note}`} />
            </ListItemButton>
            
          </ListItem>
        );
      })}
    </List>
  );
}