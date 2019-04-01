export function reducers(state = {tokens: {}}, action) {
    switch (action.type) {
        case 'LOGIN_SUCCEEDED':
            console.log(action);
            return {
                ...state,
                tokens: action.payload
            }; 
    }
    return state;
}
