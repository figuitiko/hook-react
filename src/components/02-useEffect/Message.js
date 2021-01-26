import React, {useEffect} from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Mounted');
        return () => {
            console.log('Unmounted');
        }
    }, [])

    return (
        <div>
            <h3> Eres Genial</h3>
        </div>
    )
}
