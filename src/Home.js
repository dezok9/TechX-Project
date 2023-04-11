import React, {useState} from 'react'
import {Button} from "./Button.js"
import { Header } from './Header.js'
import {Description} from './Description.js'
import "./css/index.css"
import "./css/App.css";
import {Result} from "./Components/Result"


import  "react-color-palette/lib/css/styles.css";
import {ColorPicker, useColor} from "react-color-palette";



const options = [
  {
    label: "Deuteranomaly",
    value: "deuteranomaly",
  },
  {
    label: "Protanomaly",
    value: "protanomaly",
  },
  {
    label: "Tritanomaly",
    value: "tritanomaly",
  },
];


export function Home() {
  const [message, setMessage] = useState('');
  const [type, setType] = useState("");
  const handleChange = (e) => {
    // 👇 Get input value from "event"
    setMessage(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  }

  const [color, setColor] = useColor("hex", "#5887FF");

  return (
    <div>
      <Header/>
      <div className='d-flex'>
        <div className='col'>
          <div className='d-flex align-items-center justify-content-evenly  click'>
            <Button name="Hex"/>
            <Button name="Color Palette"/>
            <Button name="RGB"/>
            <div>
            <input
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
            />
            
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='d-flex align-items-center justify-content-evenly  click'>
          <div className="select-container">
            <select value={options.value} onChange={handleType} className='text-light'> {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <h1>Result</h1>
          <Result color={message} type={type}></Result>
          
          

        </div>
      </div>

      <div>
            <ColorPicker width = {456} height = {228}
                  color = {color}
                  onChange = {setColor}
                  hideHEX = {true}
                  hideRGB = {true}
                  hideHSV dark />
      </div>

    </div>

    <div className='border-0 accordion-flush'>      
      <Description/>
    </div>
  </div>
  )
} 
