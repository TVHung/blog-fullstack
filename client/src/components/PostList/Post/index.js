import React from 'react';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { updatePost } from '../../../redux/actions';
import imgDefaultUrl from '../../../assets/images/a.jpg';

export default function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onLikeBtnClick = React.useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);

  //menulist
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleIconClicks = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
  };
  
  const handleDelete = () => {
    handleClose();
  };


  const menu = (
    <Menu
      id="fade-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <MenuItem onClick={handleEdit}>Edit</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
        action={
          <>
            <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleIconClicks}>
              <MoreVertIcon />
            </IconButton>
            {menu}
          </>
        }
      />
      <CardMedia
        image={post.attachment || imgDefaultUrl}
        className={classes.media}
        title="Title"
      />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {post.title}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLikeBtnClick}>
          <FavoriteIcon />
          <Typography component='span' color='textSecondary'>
            {`${post.likeCount} likes`}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}