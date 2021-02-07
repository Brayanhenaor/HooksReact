import React, { useMemo, useState } from 'react';
import '../02-useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter'
import {procesoPesado} from '../../helpers/procesoPesado.js'
export const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoprocesado = useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={increment}>
                +1
            </button>

            <p>{memoprocesado}</p>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={
                    ()=> {
                        setShow(!show);
                    }
                }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
