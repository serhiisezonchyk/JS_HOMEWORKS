import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  MenuItem,
  Select,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './todo-list.module.css';

const TodoList = ({
  todos,
  className,
  isView = true,
  onDelete,
  onStatusChange,
}) => {
  const navigate = useNavigate();

  return (
    <div className={classNames(className)}>
      <List className={styles.list}>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            button
            onClick={() => navigate(`/${todo.id}`)}
          >
            <ListItemText
              id={`checkbox-list-label-${todo.id}`}
              primary={todo.title}
              secondary={todo.description}
            />
            {isView && <ListItemText primary={todo.status} />}
            {!isView && (
              <ListItemSecondaryAction>
                <Select
                  value={todo.status}
                  size='small'
                  onChange={(e) => onStatusChange(todo.id, e.target.value)}
                >
                  <MenuItem value='completed'>Completed</MenuItem>
                  <MenuItem value='not-completed'>Not Completed</MenuItem>
                  <MenuItem value='pending'>Pending</MenuItem>
                </Select>
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={() => onDelete(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
