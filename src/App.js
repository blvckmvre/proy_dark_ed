import { useState, useRef, useEffect } from "react";
import ItemsForm from "./comps/ItemsForm";
import Pool from "./comps/Pool";

const App = () => {

  const [input, setInput] = useState('');
  const [pool, setPool] = useState([]);
  const [isDisabled, setDisabled] = useState(false);
  const [current, setCurrent] = useState('');
  const [isInstant, setInstant] = useState(0);

  const Inp = useRef();

  const addPool = () => {
    const val = input.trim();
    if(val && !pool.includes(val)){
      setPool([...pool, val]);
      Inp.current.focus();
    } else {
      Inp.current.classList.add('warn');
      setDisabled(true);
      setTimeout(()=>{
        Inp.current.classList.remove('warn');
        setDisabled(false);
      },500)
    }
    setInput('');
  }
  const rmPool = (val) => {
    setPool([...pool].filter(a=>a!==val));
  }
  const randomIce = (btn) => {
    if(pool.length>1){
      if(isInstant) {
        setCurrent(pool[Math.floor(Math.random()*pool.length)]);
      } else {
        var count=0;
        setDisabled(true);
        var timer = setInterval(()=>{
          if(count>=20){
            clearInterval(timer);
            setDisabled(false);
          }
          setCurrent(pool[Math.floor(Math.random()*pool.length)]);
          count++;
        },100);
      }
    } else {
      setDisabled(true);
      btn.textContent='Not enough items!';
      btn.classList.add('warn');
      setTimeout(()=>{
        setDisabled(false);
        btn.textContent='Start';
        btn.classList.remove('warn');
      },500)
    }
  }

  useEffect(()=>{
    if(current)
    setCurrent('');
  },[pool]);

  return (
    <div className={isDisabled ? "App nopointer" : "App"}>
      <h1 id='title'>Let me decide it for you...</h1>
      <p className="result">{current}</p>
      <div className="App__child">
        <ItemsForm 
          isDisabled={isDisabled} 
          ref={Inp} 
          input={input} 
          setInput={setInput} 
          pool={pool} 
          addPool={addPool} 
          setInstant={setInstant}
          isInstant={isInstant}
        />
        <Pool 
          isDisabled={isDisabled}
          pool={pool} 
          rmPool={rmPool} 
          current={current}
          randomIce={randomIce}
        />
      </div>
    </div>
  );
}

export default App;
