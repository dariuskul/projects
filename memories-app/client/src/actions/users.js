import * as api from '../api/index';

export const register = (post) => async (dispatch) =>{
    try {
        const { data } = await api.register(post);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
        
    }
    
    }