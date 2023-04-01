import React from 'react'
import "./css/App.css";

export function Button(props) {
  return (
    <div>
        <button className='btn btn-tertiary click'>
            {props.name}
        </button>
    </div>
  )
}
