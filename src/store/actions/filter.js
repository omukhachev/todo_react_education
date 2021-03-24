import { SET_FILTER } from "../constains/filter";

export function setFilter(filter) {
    return function (dispatch) {
        try {
            const localState = JSON.parse(localStorage.getItem('state'));
            localState.filter.currentFilter = filter;
            localStorage.setItem('state', JSON.stringify(localState));
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
