import React from 'react'

export function Result(props) {
  const blinder = require('color-blind');
  var result = blinder.protanomaly(props.color); 
  const select = () => {
    switch(props.type){
        case "protanomaly":
            result = blinder.protanomaly(props.color);
            break;
        case "deuteranomaly":
            result = blinder.deuteranomaly(props.color);
            break;
        case "tritanomaly":
            result = blinder.tritanomaly(props.color);
            break;
        default:
          result = blinder.protanomaly(props.color);
          break;
    }
  }
  select();
  return (
    <div>
        <div>
            <h1 style={{background: props.color}}>Before</h1>
            <h1 className='' style={{background: result}}>After</h1>
        </div>
      
    </div>
  )
}

