import { forwardRef } from "react";
import Btn from "./ui/btn/Btn";
import Input from "./ui/input/Input";
import RadioYesOrNo from "./ui/radio/RadioYesOrNo/RadioYesOrNo";

const ItemsForm = forwardRef(({input, setInput, addPool, isDisabled, setInstant, isInstant}, ref) => {
    return(
        <div className="Form">
            <Input 
                disabled={isDisabled} 
                ref={ref} 
                autoFocus 
                value={input} 
                onChange={e=>setInput(e.target.value)} 
                placeholder="Type here"
                maxlength="16"
            />
            <Btn 
                disabled={isDisabled} 
                onClick={addPool}
            >Add to Pool</Btn>
            <h4 style={{textAlign:"center"}}>Mode:</h4>
            <RadioYesOrNo 
                data={isInstant} 
                handler={setInstant} 
                name='mode' 
                titleYes='Instant' 
                titleNo='Roulette' 
            />
        </div>
    )
})
export default ItemsForm;