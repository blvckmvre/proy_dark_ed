import React from 'react'
import cs from './RadioYesOrNo.module.css';

export default function RadioYesOrNo({name, titleYes, titleNo, handler, data}) {
  return (
    <div onChange={e=>handler(+e.target.value)} className={cs.RadioWrapper}>
        <label className={data ? cs.RadioLab+' '+cs.RadioLabChecked : cs.RadioLab}>
            {titleYes}
            <input name={name} value={1} className={cs.RadioInp} type='radio'></input>
        </label>
        <label className={!data ? cs.RadioLab+' '+cs.RadioLabChecked : cs.RadioLab}>
            {titleNo}
            <input name={name} value={0} className={cs.RadioInp} type='radio'></input>
        </label>
    </div>
  )
}
