import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "white",
      padding: "20px 20px"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      margin: "10px ",
      padding: "10px",

    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default useStyles;