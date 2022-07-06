import cs from './Btn.module.css';

const Btn = ({children, ...p}) => {
    return(
        <button className={cs.Btn} {...p}>{children}</button>
    )
}
export default Btn;