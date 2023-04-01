import React from 'react'

export function Button(props) {
  return (
    <div>
        <button className='btn btn-tertiary text-dark btn-outline-dark'>
            {props.name}
        </button>
    </div>
  )
}
