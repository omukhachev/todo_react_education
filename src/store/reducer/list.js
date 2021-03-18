import { ADD_ITEM, DROP_ITEM, CHECK_ITEM, CHECK_ALL, CLEAR_COMPLETED } from "../constains/list";

const list = {
  data: [],
  loading: false,
};

const List = (state = list, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false
      };
    }
    case DROP_ITEM: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }
    case CHECK_ITEM: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }
    case CHECK_ALL: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }
    case CLEAR_COMPLETED: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }
    default: return state;
  }
}

export default List;