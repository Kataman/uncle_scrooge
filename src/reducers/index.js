export function reducers(state = {tokens: {}}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESEDED':
            console.log(action);
            return {
                ...state,
                tokens: action.payload
            }; 
    }
    return state;
}
