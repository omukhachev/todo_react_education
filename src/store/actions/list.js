import { ADD_ITEM, CHECK_ITEM, DROP_ITEM, CHECK_ALL, CLEAR_COMPLETED } from '../constains/list';
import store from '../../index';

export function addItem(value) {
  return ({
    type: ADD_ITEM,
    payload: value,
  });
}

export function dropItem(key) {
  const state = store.getState().list.data.filter(item => item.key !== key)
  return ({
    type: DROP_ITEM,
    payload: state,
  });
}

export function checkItem(key) {
  const state = [...store.getState().list.data]
  state.forEach(item => {
    if (item.key === key) item.ready = !item.ready;
  })
  return ({
    type: CHECK_ITEM,
    payload: state,
  });
}

export function checkAll() {
  const state = [...store.getState().list.data]
  state.forEach(item => {
    item.ready = true;
  });
  return ({
    type: CHECK_ALL,
    payload: state,
  });
}

export function clearCompleted() {
  const state = store.getState().list.data.filter(item => !item.ready)
  return ({
    type: CLEAR_COMPLETED,
    payload: state,
  });
}