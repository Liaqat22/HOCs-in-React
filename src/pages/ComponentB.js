import React from 'react'
import WithHOC from './HOC'

function ComponentB({ COUNT, INC }) {
    return (
        <div>
            <button
                className='btn btn-warning m-3'
                onClick={INC}>
                ComponentB {COUNT} times clicked
            </button>

        </div>
    )
}

export default WithHOC(ComponentB, 5)
