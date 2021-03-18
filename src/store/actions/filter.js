import { SET_FILTER } from "../constains/filter";

export function setFilter(filter) {

    return ({
        type: SET_FILTER,
        payload: filter,
    })
}