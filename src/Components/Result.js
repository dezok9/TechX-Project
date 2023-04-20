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
        <div style = {{display: "flex"}}>
            <h1 className = "result-boxes" style={{background: props.col, margin: "10px", textAlign: "bottom"}}>Before</h1>
            <h1 className = "result-boxes" style={{background: result, margin: "10px", textAlign: "bottom"}}>After</h1>
        </div>
      
    </div>
  )
}

