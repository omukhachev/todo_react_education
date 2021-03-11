import './App.css';
import React, { useState } from 'react'
import { ReactComponent as Icon } from './trash.svg';
function App() {
  return (
    <div className="container">
      <Form />
    </div>
  );
}
let i = 0;
let inputText;

const Form = () => {
  const [itemList, setItemList] = useState([]);
  const [filter, setFilter] = useState('all');
  let Items;
  const Input = (e) => {
    if (e.key === 'Enter') {
      inputText = document.querySelector('#inputKey').value
      if (inputText.replace(/\s+/g, '').length === 0) {
        inputText = 'Your empty ToDo =)'
      }
      setItemList([...itemList, { text: inputText, key: i++, ready: false }])
      document.querySelector('#inputKey').value = ''

    }
  }

  switch (filter) {
    case 'all': Items = itemList.map((item) => {
      return (
        <div className="flexDiv" key={item.key}>
          <div className="checkItem">
            <input type="checkbox" className="Checker" onClick={() => setChecked(item.key)} checked={item.ready} />
          </div>
          {item.ready === true ? <div className="Item" style={{ textDecoration: 'line-through' }}>{item.text}</div> : <div className="Item">{item.text}</div>}
          <Icon className="Icon" onClick={() => itemDrop(item.key)} />
        </div>
      )
    });
      break;
    case 'todo': Items = itemList.map((item) => {
      if (item.ready === false) {
        return (
          <div className="flexDiv" key={item.key}>
            <div className="checkItem">
              <input type="checkbox" className="Checker" onClick={() => setChecked(item.key)} checked={item.ready} />
            </div>
            {item.ready === true ? <div className="Item" style={{ textDecoration: 'line-through' }}>{item.text}</div> : <div className="Item">{item.text}</div>}
            <Icon className="Icon" onClick={() => itemDrop(item.key)} />
          </div>
        )
      }
    });
      break;
    case 'complete': Items = itemList.map((item) => {
      if (item.ready === true) {
        return (
          <div className="flexDiv" key={item.key}>
            <div className="checkItem">
              <input type="checkbox" className="Checker" onClick={() => setChecked(item.key)} checked={item.ready} />
            </div>
            {item.ready === true ? <div className="Item" style={{ textDecoration: 'line-through' }}>{item.text}</div> : <div className="Item">{item.text}</div>}
            <Icon className="Icon" onClick={() => itemDrop(item.key)} />
          </div>
        )
      }
    });
      break;
  }

  const setChecked = (itemKey) => {
    setItemList(itemList.map(item => {
      if (item.key === itemKey) {
        item.ready = !item.ready
      }
      return item;
    }));
  }

  const itemDrop = (itemKey) => {
    setItemList(itemList.filter(item => item.key !== itemKey))
  }

  const clearCompleted = () => {
    setItemList(itemList.filter(item => !item.ready))
  }

  function Filter(filter, allStyle, todoStyle, completeStyle) {
    setFilter(filter);
    document.querySelector('#all').className = allStyle;
    document.querySelector('#todo').className = todoStyle;
    document.querySelector('#complete').className = completeStyle;
  }

  const checkAll = () => {
    setItemList(itemList.map(item => {
      item.ready = true
      return item;
    }));
  }

  return (
    <React.Fragment>
      <h4 className="Title">Your todo list</h4>
      <div className="Form">
        <input id="inputKey" onKeyDown={Input} className="taskInput" placeholder="Enter your task name here"></input>
        <div className="noScroll">
          {Items}
        </div>
        <div className="lowerButtons">
          <div className="text" onClick={checkAll}>{itemList.length} tasks left</div>
          <div>
            <button id="all" className="btns" onClick={() => Filter('all','btns-on','btns','btns')}>All</button>
            <button id="todo" className="btns" onClick={() => Filter('todo','btns','btns-on','btns')}>ToDo</button>
            <button id="complete" className="btns" onClick={() => Filter('complete','btns','btns','btns-on')}>Complete</button>
          </div>
          <div className="text" onClick={clearCompleted}>Clear completed</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
