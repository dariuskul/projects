import * as api from '../api/index';
export const register = (post) => async (dispatch) =>{
    try {
        const { data } = await api.register(post);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
    }  
}

export const login = (user,history) => async (dispatch) =>{

    try {
        const {data} = await api.login(user);
        localStorage.setItem('user', JSON.stringify(data));
        dispatch({type: 'LOGIN', payload: data})
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const logout = (history) => (dispatch) =>{
    localStorage.removeItem('user');
    dispatch({type: 'LOGOUT',payload: ''});
    history.push('/auth/login');
}