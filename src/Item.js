import React from 'react';
import App from './App.js';
import './App.css';
import { ReactComponent as Icon } from './trash.svg';

function CheckItem() {
  document.querySelector('.Item').style.textDecoration === 'line-through' ? document.querySelector('.Item').style.textDecoration = 'none' : document.querySelector('.Item').style.textDecoration = 'line-through';
  console.log('checked');
}



function Item() {

  return (
    <div className="flexDiv">
      <div className="checkItem">
        <input type="checkbox" className="Checker" onClick={CheckItem} />
      </div>
      <div className="Item">{document.querySelector('#inputKey').value}</div>
      <Icon className="Icon" onClick={itemDrop} />
    </div>
  )
}

export default (Item);