export const success = (message) => async (dispatch) => {

    dispatch({type: 'SUCCESS', payload: message})
}


export const error = (error) => async (dispatch) => {

    dispatch({type: 'FAILURE', payload: error})
}

export const clear = () => async(dispatch) =>{
    dispatch({type: 'CLEAR', payload: null})
}