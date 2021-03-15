import Button from '../Button'
import React from 'react'
import './style.css'

const LowerButtons = ({ count, checkAll, clearCompleted, setFilter }) => {
    return (
        <div className="lowerButtons">
            <div className="text" onClick={checkAll}>{count} tasks left</div>
            <div>
                <Button id="all" onClick = {() => setFilter(0)}>All</Button>
                <Button id="todo" onClick = {() => setFilter(1)}>ToDo</Button>
                <Button id="complete" onClick = {() => setFilter(2)}>Complete</Button>
            </div>
            <div className="text" onClick={clearCompleted}>Clear completed</div>
        </div>
    )
}

export default LowerButtons;