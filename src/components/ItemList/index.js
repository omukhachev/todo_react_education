import './style.css';

const ItemList = ({ children }) => {    
    return (
        <div className="item_list">{children}</div>
    );
}

export default ItemList;