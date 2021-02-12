import React from 'react';
import {TextField, Grid} from '@material-ui/core';

const Input = ({name, handleOnChange, label, type, half, value, error, helperText}) =>{
    return(
        <Grid item xs={12} sm={half? 6 : 12}>
            <TextField 
            variant="outlined"
            onChange={handleOnChange}
            fullWidth
            label={label}
            autoFocus
            type={type}
            name = {name}
            value={value}
            autoComplete="off"
            error={error}
            helperText={helperText}
          />
        </Grid>

        
        
        
    )
}

export default Input;