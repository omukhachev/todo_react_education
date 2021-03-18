import { SET_FILTER } from '../constains/filter';

const filter = {
    currentFilter: 0,
}

const Filter = (state = filter, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                currentFilter: action.payload,
            }
        default: return state;
    }
}

export default Filter;