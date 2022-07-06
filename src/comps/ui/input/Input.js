import { forwardRef } from 'react';
import cs from './Input.module.css';

const Input = forwardRef((p, ref) => {
    return(
        <input ref={ref} className={cs.Inp} {...p} />
    )
})
export default Input;