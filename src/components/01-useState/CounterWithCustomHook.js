import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'
export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();
    
    
    return (
        <>
          <h1>Counter with hook: {state}</h1>
          
          <hr/>

          <button 
            onClick={increment}
            className="btn btn-primary">+1</button>
          <button 
            onClick={reset}
            className="btn btn-warning">Reset</button>
          <button 
            onClick={decrement}
            className="btn btn-danger">-1</button>  
        </>
    )
}
