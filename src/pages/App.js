import React, { useState, useMemo, useEffect } from 'react';
import Input from "../components/Input";
import Header from '../components/Header';
import LowerButtons from "../components/Lower_Buttons";
import Item from '../components/Item';
import Form from '../components/Form';
import Container from '../components/Container';
import ItemList from '../components/ItemList';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  const [filter, setFilterValue] = useState(0);
  const addItem = (value) => {
    setList([...list, {
      text: value,
      key: counter,
      ready: false
    }]);
    setCounter(counter + 1);
  }

  const dropItem = (key) => {
    setList(list.filter(item => item.key !== key));
  }

  const setFilter = (value) => {
    setFilterValue(value);
  }

  const checkItem = (key) => {
    setList(list.map(item => {
      if (item.key === key) {
        item.ready = !item.ready;
      }
      return item;
    }))
  }

  const checkAll = () => {
    setList(list.map(item => {
      item.ready = true
      return item;
    }));
  }

  const clearCompleted = () => {
    setList(list.filter(item => !item.ready));
  }
  
  return (
    <Container>
      <Header headerText="Your todo list" />
      <Form>
        <Input addItem={addItem} />
        <ItemList>
          {list.filter(
            item => {
              switch (filter) {
                case 0: return item;
                case 1: return !item.ready;
                case 2: return item.ready;
              }
            }
          ).map(item =>
            <Item
              item={item.text}
              id={item.key}
              key={item.key}
              dropItem={dropItem}
              checkItem={checkItem}
              checked={item.ready}
            />)}
        </ItemList>
        {list.length ?
          <LowerButtons
            count={list.length}
            checkAll={checkAll}
            clearCompleted={clearCompleted}
            setFilter={setFilter}
          />
          :
          <div />}
      </Form>
    </Container>


  );
}

export default App;
