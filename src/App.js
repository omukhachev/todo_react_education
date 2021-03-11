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
  const Input = (e) => {
    if (e.key === 'Enter') {
      inputText = document.querySelector('#inputKey').value;
      setItemList([...itemList, { text: inputText, key: i++, ready: false }]);
      document.querySelector('#inputKey').value = '';

    }
  }

  const Items = itemList.map((item) => {
    return (
      <div className="flexDiv" key={item.key}>
        <div className="checkItem">
          <input type="checkbox" className="Checker" onClick={() => setChecked(item.key)} />
        </div>
        {item.ready === true ? <div className="Item" style={{ textDecoration: 'line-through' }}>{item.text}</div> : <div className="Item">{item.text}</div>}
        <Icon className="Icon" onClick={() => itemDrop(item.key)} />
      </div>
    )
  })

  const setChecked = (itemKey) => {
    setItemList(itemList.map(item => {
      if (item.key === itemKey) {
        item.ready = !item.ready
      }
      return item;
    }));
    console.log(itemList);
  }

  const itemDrop = (itemKey) => {
    setItemList(itemList.filter(item => item.key !== itemKey))
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
          <div className="text">{itemList.length} tasks left</div>
          <div>
            <button className="btns">All</button>
            <button className="btns">ToDo</button>
            <button className="btns">Complete</button>
          </div>
          <div className="text" id="textKey">Clear completed</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
