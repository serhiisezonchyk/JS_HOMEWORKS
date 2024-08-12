import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

function PhoneList({ data, onDelete, onViewMore, listItemProps }) {
  return (
    <List>
      {data.map((el) => (
        <ListItem key={el.id}>
          <ListItemText
            primary={el[listItemProps.primary]}
            secondary={el[listItemProps.secondary]}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge='end'
              aria-label='delete'
              onClick={() => onDelete(el.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              color='primary'
              onClick={() => onViewMore(el.id)}
              style={{ marginLeft: '8px' }}
            >
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default PhoneList;
