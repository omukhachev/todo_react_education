import {
  ADD_ITEM,
  DROP_ITEM,
  CHECK_ITEM,
  CHECK_ALL,
  CLEAR_COMPLETED,
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  ADD_ITEM_ERROR,
  DROP_ITEM_ERROR,
  CHECK_ITEM_ERROR,
  CHECK_ALL_ERROR,
  CLEAR_COMPLETED_ERROR,
} from "../constains/list";

const list = {
  data: [],
  loading: false,
};

const List = (state = list, action) => {
  switch (action.type) {
    case GET_LIST_START: {
      return {
        ...state,
        data: [],
        loading: true,
      };
    }
    case GET_LIST_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case GET_LIST_ERROR: {
      return {
        ...state,
        data: 'Get items-list error occured',
        loading: false,
      }
    }
    case ADD_ITEM: {
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }
    case ADD_ITEM_ERROR: {
      return {
        ...state,
        data: 'Add-item error occured',
      }
    }
    case DROP_ITEM: {
      return {
        ...state,
        data: action.payload
      };
    }
    case DROP_ITEM_ERROR: {
      return {
        ...state,
        data: 'Delete item error occured',
      }
    }
    case CHECK_ITEM: {
      return {
        ...state,
        data: action.payload
      };
    }
    case CHECK_ITEM_ERROR: {
      return {
        ...state,
        data: 'Check item error occured',
      }
    }
    case CHECK_ALL: {
      return {
        ...state,
        data: action.payload
      };
    }
    case CHECK_ALL_ERROR: {
      return {
        ...state,
        data: 'Check all items error occured',
      }
    }
    case CLEAR_COMPLETED: {
      return {
        ...state,
        data: action.payload
      };
    }
    case CLEAR_COMPLETED_ERROR: {
      return {
        ...state,
        data: 'Clear completed error occured',
      }
    }
    default: return state;
  }
}

export default List;