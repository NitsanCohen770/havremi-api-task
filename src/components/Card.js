import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Collapse,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ClipLoader from 'react-spinners/ClipLoader';

const Layout = ({ userData, isLoading }) => {
  const userNameFirstLetter = userData.fullName.split(' ')[1].split('');
  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    grid: {
      minHeight: '100vh',
      height: '100%',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let cardContent = <ClipLoader />;
  if (!isLoading) {
    cardContent = (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {userNameFirstLetter[0]}
            </Avatar>
          }
          title={userData.fullName}
        />

        <CardMedia
          className={classes.media}
          image={userData.imageLink}
          title="Paella dish"
        />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <strong>Username:</strong> {userData.username}
            </Typography>
            <Typography paragraph>
              <strong>Password:</strong> {userData.password}
            </Typography>
            <Typography paragraph>
              <strong>Email:</strong> {userData.email}
            </Typography>
            <Typography paragraph>
              <strong>Country:</strong> {userData.country}
            </Typography>
            <Typography paragraph>
              <strong>City: </strong> {userData.city}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.grid}
    >
      <Grid item xs={8}>
        {cardContent}
      </Grid>
    </Grid>
  );
};

export default Layout;
