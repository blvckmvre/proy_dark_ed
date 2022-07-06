import Btn from "./ui/btn/Btn";

const Pool = ({pool,rmPool,current,randomIce,isDisabled}) => {
    return(
        <div className="Pool">
            <div className="Pool__child">
                <p className="desc">Click on item to remove</p>
                <div className="pool">
                    {pool.map((it,i)=>
                        <p 
                            className={it===current ? 
                                'pool__item pool__item__current' :
                                'pool__item'}
                            onClick={()=>rmPool(it)} 
                            key={it+i}
                        >{it}</p>
                    )}
                </div>
            </div>
            <Btn 
                disabled={isDisabled} 
                onClick={e=>randomIce(e.target)}
            >Start</Btn>
        </div>
    )
}
export default Pool;