import React from 'react';
import Post from './Post/Post'
import {useSelector} from 'react-redux';

import useStyles from './styles';
import { Grid } from '@material-ui/core';


const Posts = ({post,setCurrentId}) => {
    const classes = useStyles();

    const posts = useSelector((state) => state.posts);
    return(
        !posts.length ? 
        
        (<div>
            <h2>Currently no posts...</h2>
        </div>) : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )

}

export default Posts;