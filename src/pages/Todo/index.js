import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  addItem,
  dropItem,
  checkItem,
  checkAll,
  clearCompleted,
  getList,
} from '../../store/actions/list';
import { setFilter } from '../../store/actions/filter';
import Input from "../../components/Input";
import Header from '../../components/Header';
import LowerButtons from "../../components/Lower_Buttons";
import Item from '../../components/Item';
import Form from '../../components/Form';
import Container from '../../components/Container';
import ItemList from '../../components/ItemList';

import './style.css';

const ToDo = () => {
  const list = useSelector(state => state.list.data);
  const filter = useSelector(state => state.filter.currentFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list.length) dispatch(getList());
  }, [dispatch, list.length])

  const addItemHandle = (value) => {
    const data = {
      user_id: '60586cc7c911a043b5df4a9e',
      text: value,
      key: !list.length ? 0 : list[list.length - 1].key + 1,
      ready: false,
    }
    dispatch(addItem(data));
  };

  const dropItemHandle = (key) => {
    dispatch(dropItem(key));
  }

  const setFilterHandle = (value) => {
    dispatch(setFilter(value));
  }

  const checkItemHandle = (key) => {
    dispatch(checkItem(key));
  }

  const checkAllHandle = () => {
    dispatch(checkAll());
  }

  const clearCompletedHandle = () => {
    dispatch(clearCompleted());
  }

  const isCheckedItems = () => {
    return list.find((item) => item.ready === true);
  }

  const filteredList = useMemo(() => {
    if (!list.length) return [];
    return list.filter(
      item => {
        switch (filter) {
          case 0: return item;
          case 1: return !item.ready;
          case 2: return item.ready;
          default: return item;
        }
      })
  }, [filter, list])

  return (
    <Container>
      <Header headerText="Your todo list" />
      <Form>
        <Input addItem={addItemHandle} />
        {!!filteredList.length && <ItemList>
          {filteredList.map(item =>
            <Item
              item={item.text}
              id={item.key}
              key={item.key}
              dropItem={dropItemHandle}
              checkItem={checkItemHandle}
              checked={item.ready}
            />)}
        </ItemList>}
        {!!list.length &&
          <LowerButtons
            count={list.length}
            checkAll={checkAllHandle}
            clearCompleted={clearCompletedHandle}
            setFilter={setFilterHandle}
            filter={filter}
            isCheckedItems={isCheckedItems}
          />}
      </Form>
    </Container>
  );
}

export default ToDo;