import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import {useSelector} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import  {useFormik} from 'formik';
import * as yup from 'yup';
const Form = ({currentId, setCurrentId}) => {

    const classes = useStyles();
    const [postData, setData] = useState({
        creator: '',
        title: '',
        tags: '',
        selectedFile: '',
        message: '',
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();



    useEffect(()=>{
        if(post){
            formik.setValues(post);
        }
    },[post])

    const validationSchema = yup.object({
        creator: yup.string()
          .required('Email is required'),
      });

        const formik = useFormik({
          initialValues: {
            creator: postData.creator,
            title: postData.title,
            message: postData.message,
            tags: postData.tags,
            selectedFile: postData.selectedFile
          },
          validationSchema: validationSchema,
          onSubmit: (values) => {
            if(currentId)
                dispatch(updatePost(currentId,values));
            else{
                dispatch(createPost(values));
            }
          }
        })


    return(
        <Paper className={classes.paper}>
            {console.log(..."OPS", postData.creator)}
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={formik.handleSubmit}>
                <Typography variant="h6">{post ? 'Editing' : 'Creating'} Memory</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={formik.values.creator}
                onChange={formik.handleChange}
                error={formik.touched.creator && Boolean(formik.errors.creator)}
                helperText={formik.touched.creator && formik.errors.creator}
                />
                <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                />
                <TextField 
                name="message" 
                variant="outlined" 
                label="Message" 
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                />
                <TextField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth
                value={formik.values.tags}
                onChange={formik.handleChange}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64})=> {formik.values.selectedFile= base64}}
                    />
                </div>
                <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>{post? 'Update memory!' : 'Create memory!'}</Button>
                <Button className={classes.buttonSubmit} color="secondary" variant="contained" size="small" type="clear" fullWidth>Clear</Button>
            </form>
        </Paper>
    )

}

export default Form;