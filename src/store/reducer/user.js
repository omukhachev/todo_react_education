import * as constains from '../constains/user';

const user = {
    token: null,
    response: null,
    error: null,
    loading: false,
}

const User = (state = user, action) => {

    switch (action.type) {
        case constains.ADD_USER_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case constains.ADD_USER_SUCCESS: {
            return {
                ...state,
                response: action.payload,
                loading: false,
            };
        }
        case constains.ADD_USER_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        }
        case constains.AUTH_USER_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case constains.AUTH_USER_SUCCESS: {
            return {
                ...state,
                token: action.payload,
                loading: false,
            };
        }
        case constains.AUTH_USER_ERROR: {
            return {
                ...state,
                loading: false,
            };
        }
        case constains.CLEAR_RESPONSE: {
            return {
                ...state,
                response: null,
                error: null,
            }
        }
        default: return state;
    }
}

export default User;

