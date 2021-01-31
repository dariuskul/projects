
// eslint-disable-next-line import/no-anonymous-default-export
export default (users =[], action) => {
    switch(action.type){
        case 'CREATE':
            return [...users, action.payload];
        default:
            return users;
    }
}