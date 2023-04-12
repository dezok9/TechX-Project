import React from 'react'

export function Result(props) {
  const blinder = require('color-blind');
  var result = blinder.protanomaly(props.col); 
  const select = () => {
    switch(props.type){
        case "protanomaly":
            result = blinder.protanomaly(props.col);
            break;
        case "deuteranomaly":
            result = blinder.deuteranomaly(props.col);
            break;
        case "tritanomaly":
            result = blinder.tritanomaly(props.col);
            break;
        default:
          result = blinder.protanomaly(props.col);
          break;
    }
  }
  select();
  return (
    <div>
        <div>
            <h1 style={{background: props.col}}>Before</h1>
            <h1 className='' style={{background: result}}>After</h1>
        </div>
      
    </div>
  )
}

