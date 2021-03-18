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
        data: [...state.data, action.payload]
      };
    }
    case DROP_ITEM: {
      return {
        data: action.payload
      };
    }
    case CHECK_ITEM: {
      return {
        data: action.payload
      };
    }
    case CHECK_ALL: {
      return {
        data: action.payload
      };
    }
    case CLEAR_COMPLETED: {
      return {
        data: action.payload
      };
    }
    default: return state;
  }
}

export default List;