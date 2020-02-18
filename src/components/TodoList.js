import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const TodoList = ({ data }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {!!data[0] ? (
        data.map((val, i) => (
          <>
            <ListItem key={i} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary={val.name} secondary={val.description} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))
      ) : (
        <h6>No result found</h6>
      )}
    </List>
  );
};

export default TodoList;
