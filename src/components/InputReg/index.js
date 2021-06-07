import './style.css'

const InputReg = ({ placeHolder, inputType, inputId, onChange }) => {
    
    return (
        <input
            id={inputId}
            className='regInput'
            placeholder={placeHolder}
            type={inputType}
            onChange={onChange}
        />
    )
}

export default InputReg;