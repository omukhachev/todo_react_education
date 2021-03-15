import './style.css'

const Button = ({ children, onClick }) => {
    return (
        <button onClick = {onClick} className="btns">{children}</button>
    )
}

export default Button