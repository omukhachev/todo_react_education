import {
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    CLEAR_RESPONSE
} from '../constains/user';
import {
    addUser,
} from '../../service/user';

export function createUser(data) {
    return async function (dispatch) {
        dispatch({
            type: ADD_USER_START,
        });
        try{
            const answer = await addUser(data);
            return dispatch({
                type: ADD_USER_SUCCESS,
                payload: answer,
            });
        }
        catch{
            return dispatch({
                type: ADD_USER_ERROR,
            });
        };
    };
};