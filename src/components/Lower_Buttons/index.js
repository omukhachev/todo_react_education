import Button from '../Button';
import React from 'react';
import './style.css';
import cn from 'classnames';

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

const LowerButtons = ({ count, checkAll, clearCompleted, setFilter, filter, isCheckedItems }) => {
    return (
        <div className="lowerButtons">
            <div className="tasks-left" onClick={checkAll}>{count} tasks left</div>
            <div className='buttons'>
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
            {isCheckedItems() !== undefined ? <div className="clear-completed" onClick={clearCompleted}>Clear completed</div> : <div className='clear-completed' />}
        </div>
    );
}

export default LowerButtons;