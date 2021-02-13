import * as api from '../api/index';
import {FETCH_ALL, ERROR, SUCCESS, CREATE, LOGIN, LOGOUT} from '../constants/actionType';
export const register = (post,history) => async (dispatch) =>{
    try {
        const { data } = await api.register(post);
        dispatch({type: CREATE, payload: data});
        dispatch({type: SUCCESS, payload: "Thanks for registering! Now you can login!"})
    } catch (error) {
        dispatch({type: ERROR, payload: error.message})
    }  
}

export const login = (user,history) => async (dispatch) =>{

    try {
        const {data} = await api.login(user);
        localStorage.setItem('user', JSON.stringify(data));
        dispatch({type: LOGIN, payload: data})
        history.push('/');
    } catch (error) {
        dispatch({type: 'ERROR', payload: error.response.data.message})
    }
}

export const logout = (history) => (dispatch) =>{
    localStorage.removeItem('user');
    dispatch({type: LOGOUT ,payload: ''});
    history.push('/auth/login');
}