import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImageCard(props) {

  const { service } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={service.image}
          title={service.title}
          style={{ height: '180px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {service.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {service.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
