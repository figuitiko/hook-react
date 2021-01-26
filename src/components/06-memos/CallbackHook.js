import React, {useState, useCallback} from 'react';
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10); 

   

    const increment = useCallback(
        (value) => {
            setCounter(c=> c+value);
        },
        [setCounter],
    )
   
    return (
        <div>
            <h1>Use CallbackHook: {counter}</h1>
            <hr/>

        <ShowIncrement increment={increment} />

        </div>
    )
}
