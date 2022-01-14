import { useEffect } from "react"



export default function Mole(props){

    useEffect(()=> {
        let seconds= (Math.floor(Math.random()*6000))
        let timer= setTimeout(()=> props.setMole(false), seconds)
        console.log('hi')
        return () => clearTimeout(timer)
    })

    return(
        <div onClick={props.onClick}>
            <img  src='images\mole.png'/>
        </div>
    )
}