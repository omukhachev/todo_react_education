import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  CHECK_ITEM_START,
  CHECK_ITEM_SUCCESS,
  CHECK_ITEM_ERROR,
  DROP_ITEM_START,
  DROP_ITEM_SUCCESS,
  DROP_ITEM_ERROR,
  CHECK_ALL_START,
  CHECK_ALL_SUCCESS,
  CHECK_ALL_ERROR,
  CLEAR_COMPLETED_START,
  CLEAR_COMPLETED_SUCCESS,
  CLEAR_COMPLETED_ERROR,
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
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
  return async function (dispatch) {
    dispatch({
      type: ADD_ITEM_START,
      key: data.key,
    })
    try {
      const state = await postListItem(data);
      return dispatch({
        type: ADD_ITEM_SUCCESS,
        key: data.key,
        payload: state,
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
  return async function (dispatch, getState) {
    dispatch({
      type: DROP_ITEM_START,
      key: key,
    })
    try {
      const state = await deleteListItem(key);
      return dispatch({
        type: DROP_ITEM_SUCCESS,
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
  return async function (dispatch, getState) {
    dispatch({
      type: CHECK_ITEM_START,
      key: key,
    })
    try {
      const state = await checkListItem(key, getState());
      return dispatch({
        type: CHECK_ITEM_SUCCESS,
        payload: state,
        key: key,
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
  return async function (dispatch) {
    dispatch({
      type: CHECK_ALL_START,
    })
    try {
      const state = await checkAllItems();
      return dispatch({
        type: CHECK_ALL_SUCCESS,
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

export function clearCompleted(token) {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_COMPLETED_START,
    })
    try {
      const state = await clearCompletedItems(token);
      return dispatch({
        type: CLEAR_COMPLETED_SUCCESS,
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

export function getList(token) {
  return async function (dispatch) {
    dispatch({
      type: GET_LIST_START,
    })
    try {
      const data = await getListItem(token);
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