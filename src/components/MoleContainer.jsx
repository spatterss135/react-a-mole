import Mole from "./Mole"
import EmptySlot from "./EmptySlot"
import { useState } from "react"

export default function MoleContainer(props){
    let [mole, setMole] = useState(false)

    function bopMole(){
        props.setScore(props.score+1)
        setMole(false)
    }


    return (
        <div className="mole" >
            <h2>Mole Container</h2>
            {mole? <Mole onClick={bopMole}  mole={mole} setMole={setMole}/>:<EmptySlot index={props.index} setMole={setMole}/>} 
        </div>
    )
}