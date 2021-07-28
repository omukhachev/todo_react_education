import {
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    CLEAR_RESPONSE,
    AUTH_USER_START,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
} from '../constains/user';
import {
    addUser,
    signInUser,
} from '../../service/user';

export function createUser(data) {
    return async function (dispatch) {
        dispatch({
            type: ADD_USER_START,
        });
        try {
            const answer = await addUser(data);
            return dispatch({
                type: ADD_USER_SUCCESS,
                payload: answer,
            });
        }
        catch {
            return dispatch({
                type: ADD_USER_ERROR,
            });
        };
    };
};

export function authUser(data) {
    return async function (dispatch) {
        dispatch({
            type: AUTH_USER_START,
        });
        try {
            const answer = await signInUser(data);
            return dispatch({
                type: AUTH_USER_SUCCESS,
                payload: answer,
            });
        }
        catch {
            return dispatch({
                type: AUTH_USER_ERROR,
            });
        };
    };
};

export function clearResponse() {
    return function (dispatch) {
        return dispatch({
            type: CLEAR_RESPONSE,
        });
    }
};