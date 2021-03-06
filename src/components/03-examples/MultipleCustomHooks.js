import React from 'react';
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {
    
       const {state, increment}= useCounter(1);

     const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${state}`);

     const {author, quote} = !!data && data[0];
      
    return (
        <>
            <h1>Custom Hooks!!!</h1>
            <hr/>
            {
                loading?
                (<div className="alert alert-info">
                Loading...
            </div>):
              (
                <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
            </blockquote>
              )
            }            
            <button  
            className="btn btn-primary"
            onClick={increment}
            >
                Next quote
            </button>
            

        </>
    )
}
