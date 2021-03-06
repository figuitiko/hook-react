import React, {useState, useMemo} from 'react';
import '../02-useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter';
import { heavyProgress } from '../../helpers/heavyProcess';


export const MemoHook = () => {

    const {state, increment} = useCounter(5000);
    const [show, setShow] = useState(true);
    

    const memoHeavyProgress = useMemo(() => heavyProgress(state), [state]);


    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:<small>{state}</small> </h3>
            <hr/>

            <p>{memoHeavyProgress}</p>
            <button className="btn btn-primary"onClick={increment}>+1</button>
             <button className="btn btn-outline-primary" onClick={()=>setShow(!show)}> Show/Hide {JSON.stringify(show)}</button>
        </div>
       
    )
}
