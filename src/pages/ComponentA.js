import React from 'react'
import WithHOC from './HOC'

function ComponentA({ COUNT, INC }) {
    return (
        <div>
            <button
                className='btn btn-info m-3'
                onClick={INC}>
                ComponentA {COUNT} times clicked
            </button>
        </div>
    )
}

export default WithHOC(ComponentA, 3)
