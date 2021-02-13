import {SUCCESS, ERROR, CLEAR} from '../constants/actionType'

export const success = (message) => async (dispatch) => {

    dispatch({type: SUCCESS, payload: message})
}


export const error = (error) => async (dispatch) => {

    dispatch({type: ERROR, payload: error.message})
}

export const clear = () => async (dispatch) =>{
    dispatch({type: CLEAR, payload: null})
}