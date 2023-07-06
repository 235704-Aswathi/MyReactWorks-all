import React from 'react'
import './Counter.css'

const Counter=()=>{

    const[counter, setCounter]=React.useState(0)

    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }
    return(
        <div class="Container">
            <div class="Heading">
                <h1>Counter</h1>
            </div>
          
            <div class="Button" >
                <button classname='rt-button' onClick={decrement}>-</button>
                <h3> {counter}</h3>
                <button classname='lft-button' onClick={increment}>+</button>

            </div>


        </div>

        
    )
}
export default Counter
