import React, {useState} from 'react'
import {Button} from "./Button.js"
import { Header } from './Header.js'
import {Description} from './Description.js'
import {Result} from "./Components/Result"
import {ColorPicker, useColor} from "react-color-palette";
import {Rgb} from "./Rgb.js"
import "react-color-palette/lib/css/styles.css"
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./css/App.css";
import "./css/index.css"

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
  const [color, setColor] = useColor("hex", "121212")
  const [message,setMessage] = useState("#121212")
  const [tabIndex, setTabIndex] = useState(0);
  const [section, setSection] = useState(null);

  const [type, setType] = useState("");
  const handleChange = (e) => {
    // 👇 Get input value from "event"
    setMessage(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  }

  return (
    <div style = {{width: "100%"}}>
      <Header/>
        <div className='flex-container'>
          <div style = {{margin: "20px"}}>
            <h3>Select or input a color</h3>
            <ColorPicker width = {456} height = {228}
                  color = {color}
                  onChange = {setColor}
                  hideRGB = {true}
                  hideHSV = {true} dark 
                  >      
            </ColorPicker>
          </div>
          <div class="select-and-result" style = {{ width: "456px", height: "260px", margin: "20px"}}>
              <h3>Select a type of color blindness</h3>
              <select value={options.value} onChange={handleType} className='text-dark'>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              <div className='row result-text-and-boxes'>
                <h1 className='result-text' style = {{textAlign: "center"}}><strong>Result</strong></h1>
                <Result col={color.hex} type={type}></Result>
              </div>
          </div>
        </div>
      <div className='border-0 accordion-flush' style = {{marginBottom: "7%"}}>      
        <Description/>
      </div>
    </div>
  )
} 
