let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : [];
// eslint-disable-next-line import/no-anonymous-default-export
export default (state  =initialState, action) => {
    switch(action.type){
        case 'CREATE':
            return {
                user: action.payload
            }
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            localStorage.clear();
            return {...state, user: null};
        default:
            return state;
    }
}