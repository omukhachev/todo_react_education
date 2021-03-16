import Button from '../Button'
import React from 'react'
import './style.css'
import cn from 'classnames'

const Buttons = [
    {
        filter: 0,
        label: 'All',
    },
    {
        filter: 1,
        label: 'ToDo',
    },
    {
        filter: 2,
        label: 'Complete',
    },
]

const LowerButtons = ({ count, checkAll, clearCompleted, setFilter, filter }) => {
    return (
        <div className="lowerButtons">
            <div className="text" onClick={checkAll}>{count} tasks left</div>
            <div>
                {Buttons.map(item =>
                    <Button
                        key={item.filter}
                        className={cn('btns', filter === item.filter && 'btns-on')}
                        onClick={() => setFilter(item.filter)}
                    >
                        {item.label}
                    </Button>
                )}
            </div>
            <div className="text" onClick={clearCompleted}>Clear completed</div>
        </div>
    )
}

export default LowerButtons;