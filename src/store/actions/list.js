import {
  ADD_ITEM,
  ADD_ITEM_ERROR,
  CHECK_ITEM,
  CHECK_ITEM_ERROR,
  DROP_ITEM,
  DROP_ITEM_ERROR,
  CHECK_ALL,
  CHECK_ALL_ERROR,
  CLEAR_COMPLETED,
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  CLEAR_COMPLETED_ERROR,
} from '../constains/list';
import {
  getListItem,
  postListItem,
  deleteListItem,
  checkListItem,
  checkAllItems,
  clearCompletedItems,
} from '../../service/list'

export function addItem(data) {
  return function (dispatch) {
    try {
      postListItem(data);
      return dispatch({
        type: ADD_ITEM,
        payload: data,
      })
    }
    catch {
      return dispatch({
        type: ADD_ITEM_ERROR,
      })
    }
  }
}

export function dropItem(key) {
  return function (dispatch, getState) {
    try {
      deleteListItem(key);
      const state = getState().list.data.filter(item => item.key !== key)
      return dispatch({
        type: DROP_ITEM,
        payload: state,
      });
    }
    catch {
      return dispatch({
        type: DROP_ITEM_ERROR,
      })
    }
  }
}

export function checkItem(key) {
  return function (dispatch, getState) {
    try {
      checkListItem(key, getState());
      const state = [...getState().list.data]
      state.forEach(item => {
        if (item.key === key) item.ready = !item.ready;
      })
      return dispatch({
        type: CHECK_ITEM,
        payload: state,
      });
    }
    catch (e) {
      return dispatch({
        type: CHECK_ITEM_ERROR,
      })
    }
  }
}

export function checkAll() {
  return function (dispatch, getState) {
    try {
      checkAllItems();
      const state = [...getState().list.data]
      state.forEach(item => {
        item.ready = true;
      });
      return dispatch({
        type: CHECK_ALL,
        payload: state,
      });
    }
    catch {
      return dispatch({
        type: CHECK_ALL_ERROR,
      })
    }

  }
}

export function clearCompleted() {
  return function (dispatch, getState) {
    try {
      clearCompletedItems();
      const state = getState().list.data.filter(item => !item.ready)
      return dispatch({
        type: CLEAR_COMPLETED,
        payload: state,
      });
    }
    catch {
      return dispatch({
        type: CLEAR_COMPLETED_ERROR,
      })
    }
  }
}

export function getList() {
  return async function (dispatch) {
    dispatch({
      type: GET_LIST_START,
    })
    try {
      const data = await getListItem();
      return dispatch({
        type: GET_LIST_SUCCESS,
        payload: data,
      })
    }
    catch {
      return dispatch({
        type: GET_LIST_ERROR,
      })
    }
  }
}