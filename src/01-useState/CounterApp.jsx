import { useState } from "react"

export const CounterApp = () => {
    
    // aqui podemos desestructurar tambien el 'counter'
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 20,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter1: { counter1 }</h1>
            <h1>Counter2: { counter2 }</h1>
            <h1>Counter3: { counter3 }</h1>
            <hr />
            {/* la siguiente es una clase de bootsrap */}
            <button 
                className="btn"
                onClick={
                    () => setCounter({
                        ...state,
                        // con el operador spread se esparce todo y luego sobre escribimos el counter1
                        counter1: counter1 + 1,
                    })
                }>+1</button>
        </>
    )
}