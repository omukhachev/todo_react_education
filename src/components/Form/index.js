import cx from 'classnames';

import './style.css';

const Form = ({ loading, children }) => {
    return (
        <div className={`form container ${cx(loading && 'loading')}`}>{children}</div>
    );
}

export default Form;