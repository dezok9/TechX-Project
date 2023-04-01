import React from 'react'

export function Result(props) {
  var blinder = require('color-blind');
  const result = blinder.protanopia(props.color); 
  return (
    <div>
        <div>
            <h1 style={{background: props.color}}>Before</h1>
            <h1 className='' style={{background: result}}>After</h1>
        </div>
      
    </div>
  )
}

