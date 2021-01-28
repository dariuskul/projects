import React, {useState} from 'react';
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
    const classes = useStyles();
    const [postData, setData] = useState({
        creator: '',
        title: '',
        tags: '',
        selectedFile: '',
        message: ''
    });
    const dispatch = useDispatch();
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("THIS WAS SUBMITTED:", postData);
        dispatch(createPost(postData));

    }

    const clear = () =>{

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating Memory</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={postData.creator}
                onChange={(e) => setData({...postData,creator: e.target.value})}
                />
                <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth
                value={postData.title}
                onChange={(e) => setData({...postData,title: e.target.value})}
                />
                <TextField 
                name="message" 
                variant="outlined" 
                label="Message" 
                fullWidth
                value={postData.message}
                onChange={(e) => setData({...postData,message: e.target.value})}
                />
                <TextField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth
                value={postData.tags}
                onChange={(e) => setData({...postData,tags: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64})=> setData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} color="secondary" variant="contained" size="small" type="clear" fullWidth>Clear</Button>
            </form>
        </Paper>
    )

}

export default Form;