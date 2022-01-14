import { useEffect } from "react"





export default function EmptySlot(props){
    useEffect(()=> {
        let seconds= (Math.floor(Math.random()*5000)+1000)
        let timer= setTimeout(()=> {
            console.log(`Hello number ${props.index}`)
            props.setMole(true)}, seconds)
        console.log('render')
        return () => clearTimeout(timer)
    })

    return(
        <div>
            <img  src='images/molehill.png'/>
        </div>
    )
}