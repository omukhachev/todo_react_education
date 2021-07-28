import Trash from '../../Icons/trash';
import cn from 'classnames';
import './style.css';
import { useSelector } from 'react-redux';
import ItemLoader from '../ItemLoader';

const Item = ({
    item,
    id,
    dropItem,
    checkItem,
    checked }) => {

    const loadingSome = !!useSelector(state => state.list.loadingItems.includes(id));
    const loadingAll = !!useSelector(state => state.list.loadingItems.includes('all'));

    return (
        <div className={cn('flexDiv' , (loadingSome || loadingAll) && 'itemLoader')}>
            <div className="checkItem">
                <label>
                    <input
                        type="checkbox"
                        className="checker"
                        onChange={() => checkItem(id)}
                        checked={checked}
                    />
                    <div className={cn('false_checker', {
                        "false_checker_checked": checked === true
                    })} />
                </label>

            </div>
            <div className={cn('Item', {
                "Item-checked": checked === true
            })}>
                {item}
            </div>
            <div
                onClick={() => dropItem(id)}
                style={{ margin: 10, marginRight: 30 }}>
                <Trash className="Icon" />
            </div>
        </div>
    );
}

export default Item;