import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addItem, dropItem, checkItem, checkAll, clearCompleted } from '../../store/actions/list';
import { setFilter } from '../../store/actions/filter';
import Input from "../../components/Input";
import Header from '../../components/Header';
import LowerButtons from "../../components/Lower_Buttons";
import Item from '../../components/Item';
import Form from '../../components/Form';
import Container from '../../components/Container';
import ItemList from '../../components/ItemList';
import './todo.css';

const ToDo = () => {
  const listStore = useSelector(state => state.list);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.currentFilter);
 
  const addItemHandle = useCallback((value) => {
    dispatch(addItem({
      text: value,
      key: !listStore.data.length ? 0 : listStore.data[listStore.data.length - 1].key + 1,
      ready: false,
    }));
  }, [dispatch, listStore]);

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
    return listStore.data.find((item) => item.ready === true);
  }

  const filteredList = useMemo(() => (
    listStore.data.filter(
      item => {
        switch (filter) {
          case 0: return item;
          case 1: return !item.ready;
          case 2: return item.ready;
          default: return item;
        }
      }
    )
  ), [filter, listStore])

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
        {!!listStore.data.length &&
          <LowerButtons
            count={listStore.data.length}
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