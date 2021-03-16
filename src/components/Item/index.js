import Trash from '../../Icons/trash'
import cn from 'classnames'
import './style.css'

const Item = ({
    item,
    id,
    dropItem,
    checkItem,
    checked }) => {
    const classNames = cn(
        'Item', {
        "Item-checked": checked === true
    },
    )
    const classChecked = cn(
        'false_checker', {
        "false_checker_checked": checked === true
    },
    )
    return (
        <div className="flexDiv" >
            <div className="checkItem">
                <label>
                    <input
                        type="checkbox"
                        className="checker"
                        onChange={() => checkItem(id)}
                        checked={checked}
                    />
                    <div className={classChecked} />
                </label>

            </div>
            <div className={classNames}>{item}</div>
            <div
                onClick={() => dropItem(id)}
                style={{ margin: 10, marginRight: 30 }}>
                <Trash className="Icon" />
            </div>
        </div>
    )
}

export default Item;