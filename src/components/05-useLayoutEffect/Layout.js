import React ,{useLayoutEffect,useRef,useState} from 'react';
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css'

export const Layout = () => {
    
       const {state, increment}= useCounter(1);

     const { data} = useFetch(`https://breakingbadapi.com/api/quotes/${state}`);

     const { quote} = !!data && data[0];

     const pRef = useRef();
     const [boxSize, setBoxSize] = useState({});
     

     useLayoutEffect(() => {
         setBoxSize(pRef.current.getBoundingClientRect());
     }, [quote])
      
    return (
        <>
            <h1>Layout effect</h1>
            <hr/>
           
            <blockquote className="blockquote text-right">
            <p ref={pRef} className="mb-0">{quote}</p>
           
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null,3)}
            </pre>
              
              
            <button  
            className="btn btn-primary"
            onClick={increment}
            >
                Next quote
            </button>
            

        </>
    )
}
