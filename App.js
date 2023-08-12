import Card from './components/Card'
import React from "react"
import Navbar from "./components/Navbar"
import data from "./data.js"



export default function App(){
    const cards = data.map(item =>{
        return (
            <Card
            key={item.key}
            item={item}
             />
        )
    })
    return (
            <div>
                <Navbar />
                {cards}
            </div>
    
    )
    
}