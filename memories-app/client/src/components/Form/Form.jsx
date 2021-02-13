import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import {useSelector} from 'react-redux';
import  {useFormik} from 'formik';
import * as yup from 'yup';
import noob from '../../images/noob.png';

const user = JSON.parse(localStorage.getItem('user'));
const Form = ({currentId, setCurrentId}) => {

    const classes = useStyles();
    const [postData,setData] = useState({
        title: '',
        tags: '',
        selectedFile: noob,
        message: '',
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))
    

    useEffect(()=>{
        if(post){
            formik.setValues(post);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[post])


    const validationSchema = yup.object({
        title: yup.string()
            .required('Specify title for your memory!'),
        message: yup.string()
            .required('Write something about your memory!'),
        selectedFile: yup.mixed()
            .required('Your memory photo!')
      });

      const clear = () =>{
          setCurrentId(null)
          setData({
            title: '',
            tags: '',
            selectedFile: noob,
            message: '',
          })
      }

      


        const formik = useFormik({
          initialValues: {
            creator: postData.creator,
            title: postData.title,
            message: postData.message,
            tags: postData.tags,
            selectedFile: postData.selectedFile
          },
          validationSchema: validationSchema,
          onSubmit: (values, {resetForm}) => {
            if(currentId){
                dispatch(updatePost(currentId,values));
                clear();
                resetForm();
            }
            else{
                dispatch(createPost({...values, creator: user?.result?._id, name: user?.result?.name, createdAt: new Date().toISOString()}));
                resetForm();
            }
          }
        })

        if(!user?.result){
            return(
                <Paper className={classes.paper}>
                    <Typography variant="h6" align="center">
                        To create your own memories, please sign up!
                    </Typography>
                </Paper>
            )
        }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={formik.handleSubmit}>
                <Typography variant="h6">{post ? 'Editing' : 'Creating'} Memory</Typography>
                <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                />
                <TextField 
                name="message" 
                variant="outlined" 
                label="Message" 
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
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