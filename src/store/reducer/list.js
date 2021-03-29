import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  DROP_ITEM_START,
  DROP_ITEM_SUCCESS,
  DROP_ITEM_ERROR,
  CHECK_ITEM_START,
  CHECK_ITEM_SUCCESS,
  CHECK_ITEM_ERROR,
  CHECK_ALL_START,
  CHECK_ALL_SUCCESS,
  CHECK_ALL_ERROR,
  CLEAR_COMPLETED_START,
  CLEAR_COMPLETED_SUCCESS,
  CLEAR_COMPLETED_ERROR,
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
} from "../constains/list";

const list = {
  data: [],
  loading: false,
  loadingItems: [],
  error: '',
};

const List = (state = list, action) => {
  switch (action.type) {

    case GET_LIST_START: {
      return {
        ...state,
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
        loading: false,
      }
    }

    case ADD_ITEM_START: {
      return {
        ...state,
        data: [...state.data, { key: action.key }],
        loadingItems: [...state.loadingItems, action.key],
      };
    }
    case ADD_ITEM_SUCCESS: {
      state.data[state.data.indexOf(state.data.find(item => item.key === action.key))] = action.payload;
      state.loadingItems[state.loadingItems.indexOf(action.key)] = 'deleted';
      return {
        ...state,
        data: [...state.data],
        loadingItems: [...state.loadingItems],
      };
    }
    case ADD_ITEM_ERROR: {
      return {
        ...state,
        loadingItems: [],
      }
    }

    case DROP_ITEM_START: {
      return {
        ...state,
        loadingItems: [...state.loadingItems, action.key],
      }
    }
    case DROP_ITEM_SUCCESS: {
      state.loadingItems[state.loadingItems.indexOf(action.key)] = 'deleted';
      return {
        ...state,
        data: action.payload,
        loadingItems: [...state.loadingItems],
      };
    }
    case DROP_ITEM_ERROR: {
      return {
        ...state,
        loadingItems: [],
      }
    }

    case CHECK_ITEM_START: {
      return {
        ...state,
        loadingItems: [...state.loadingItems, action.key],
      }
    }
    case CHECK_ITEM_SUCCESS: {
      state.loadingItems[state.loadingItems.indexOf(action.key)] = 'deleted';
      return {
        ...state,
        data: action.payload,
        loadingItems: [...state.loadingItems]
      };
    }
    case CHECK_ITEM_ERROR: {
      return {
        ...state,
        loadingItems: [],
      }
    }

    case CHECK_ALL_START: {
      return {
        ...state,
        loadingItems: [...state.data.map(item => { return item.key })],
      }
    }
    case CHECK_ALL_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loadingItems: [],
      };
    }
    case CHECK_ALL_ERROR: {
      return {
        ...state,
        loadingItems: [],
      }
    }

    case CLEAR_COMPLETED_START: {
      state.data.forEach(item => {
        !!item.isChecked && state.loadingItems.push(item.key);
      })
      return {
        ...state,
        data: [...state.data],
        loadingItems: [...state.loadingItems],
      }
    }
    case CLEAR_COMPLETED_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loadingItems: [],
      };
    }
    case CLEAR_COMPLETED_ERROR: {
      return {
        ...state,
        loadingItems: [],
      }
    }

    default: return state;
  }
}

export default List;