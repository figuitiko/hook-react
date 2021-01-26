import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log('i am back :(');
    return (
        <small>
            {value}
        </small>
    )
}
)