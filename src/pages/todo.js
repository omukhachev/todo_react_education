import React, { useState, useMemo } from 'react';
import Input from "../components/Input";
import Header from '../components/Header';
import LowerButtons from "../components/Lower_Buttons";
import Item from '../components/Item';
import Form from '../components/Form';
import Container from '../components/Container';
import ItemList from '../components/ItemList';
import './todo.css';

const ToDo = () => {
  const [list, setList] = useState([]);
  const [filter, setFilterValue] = useState(0);

  const addItem = (value) => {
    setList([...list, {
      text: value,
      key: (!list.length) ? 0 : list[list.length - 1].key + 1,
      ready: false
    }]);
    console.log()
  }

  const dropItem = (key) => {
    setList(list.filter(item => item.key !== key));
  }

  const setFilter = (value) => {
    setFilterValue(value);
  }

  const checkItem = (key) => {
    const newList = [...list];
    newList.forEach(item => {
      if (item.key === key) item.ready = !item.ready;
    });
    setList(newList);
  }

  const checkAll = () => {
    const newList = [...list];
    newList.forEach(item => {
      item.ready = true
    });
    setList(newList);
  }

  const clearCompleted = () => {
    setList(list.filter(item => !item.ready));
  }

  const filteredList = useMemo(() => (
    list.filter(
      item => {
        switch (filter) {
          case 0: return item;
          case 1: return !item.ready;
          case 2: return item.ready;
          default: return item;
        }
      }
    )
  ), [filter, list])

  return (
    <Container>
      <Header headerText="Your todo list" />
      <Form>
        <Input addItem={addItem} />
        <ItemList>
          {filteredList.map(item =>
            <Item
              item={item.text}
              id={item.key}
              key={item.key}
              dropItem={dropItem}
              checkItem={checkItem}
              checked={item.ready}
            />)}
        </ItemList>
        {!!list.length &&
          <LowerButtons
            count={list.length}
            checkAll={checkAll}
            clearCompleted={clearCompleted}
            setFilter={setFilter}
            filter={filter}
          />}
      </Form>
    </Container>
  );
}

export default ToDo;
