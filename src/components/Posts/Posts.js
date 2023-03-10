import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post'
import useStyles from './styles';

export default function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state?.posts);
   // eslint-disable-next-line
    const classes = useStyles();
    console.log(posts);
  return (
   
   !posts?.length ? <CircularProgress /> : (
    <Grid className={classes.container} container alignItems='stretch' spacing={3}>
       {/* ln 18 (post) is a generic post word to post something */}
             {posts?.map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
             ))}
    </Grid>
   )
   
  )
}
