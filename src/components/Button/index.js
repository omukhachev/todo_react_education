import './style.css';
import cn from 'classnames';

const Button = ({ children, onClick, className, disabled }) => {
    return (
        <button onClick={!disabled && onClick} className={cn(className)}>{children}</button>
    );
}

export default Button;