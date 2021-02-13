// eslint-disable-next-line import/no-anonymous-default-export
export default (errors = [], action) =>{
    switch(action.type){
        case 'SUCCESS':
            return {
                type: 'success',
                message: action.payload
            };

        case 'ERROR':
            return {
                type: 'error',
                message: action.payload
            }
        case 'CLEAR':
            return {};
        default:
            return errors;
    }
}