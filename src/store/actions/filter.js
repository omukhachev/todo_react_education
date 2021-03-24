import { SET_FILTER } from "../constains/filter";

export function setFilter(filter) {
    return function (dispatch) {
        try {
            return dispatch({
                type: SET_FILTER,
                payload: filter,
            })
        }
        catch (e) {
            throw new Error(e);
        }
    }
}
