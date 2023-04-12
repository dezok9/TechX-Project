import React from 'react'
import "./css/rgb.css"
import "./rg.js"

export function Rgb() {
    
  return (
    <div>
        <script src="./rg.js"></script>
      <fieldset>
        <label for="r">R</label>
        <input type="range" min="0" max="255" id="r" step="1" value="0"/>
        <output for="r" id="r_out">0</output>
        </fieldset>  

        <fieldset>
        <label for="g">G</label>
        <input type="range" min="0" max="255" id="g" step="1" value="0"/>
        <output for="g" id="g_out">0</output>
        </fieldset>

        <fieldset>
        <label for="b">B</label>
        <input type="range" min="0" max="255" id="b" step="1" value="0"/>
        <output for="b" id="b_out">0</output>
        </fieldset>  

        <output id="hex">#000000</output>
    </div>
  )
}

