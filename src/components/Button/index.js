import './style.css';
import cn from 'classnames'

const Button = ({ children, onClick, className }) => {
    return (
        <button onClick={onClick} className={cn(className)}>{children}</button>
    )
}

export default Button