import React, {useState} from 'react'
import {Button} from "./Button.js"
import { Header } from './Header.js'
import {Description} from './Description.js'
import {Result} from "./Components/Result"
import {ColorPicker, useColor} from "react-color-palette";
// import {Rgb} from "./Rgb.js"
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

  const [type, setType] = useState("");
  const handleChange = (e) => {
    // 👇 Get input value from "event"
    setMessage(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  }
  return (
    <div>
      <Header/>
    
      <div className='d-flex mt-5'>

      <div className = "tabs">
      {/*The below 'Tabs' tab contains only the items that are going to be hidden/displayed in tabs.*/}  
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Hex Code</Tab>
          <Tab>Color Palette</Tab>
          <Tab>RGB</Tab>
        </TabList>
        <div className='col'>
          <div className='d-flex align-items-center justify-content-evenly  click'>
            {/* <Button name="Hex"/> */}
            {/* <Button name="Color Palette"/> */}
            {/* <Button name="Rgb"/> */}
          <div>
            <TabPanel forceRender='true' >
              {/*Text box tab*/}
              <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                hideHSV 
              />
            </TabPanel>
          </div>
          <div>
            <TabPanel default= "true">
            <ColorPicker width = {456} height = {228}
                  color = {color}
                  onChange = {setColor}
                  hideRGB = {true}
                  hideHSV = {true} dark >
            </ColorPicker>
              {/* <Rgb></Rgb> */}
            </TabPanel>
          </div>

          <div>
            <TabPanel forceRender='true'>
              {/*Text box tab*/}
              <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                hideHSV 
              />
            </TabPanel>

        </div>
        </div>
        </div>
      </Tabs>
      </div>

        <div className='col mb-3'>
          <div className='d-flex align-items-center justify-content-evenly  click'>

            {/*The option for which color blindness you are attempting to render for.*/}
            <div className="select-container row">
              <select value={options.value} onChange={handleType} className='text-dark'> 
                  {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>



            <div className='row'>
              <h1>Result</h1>
              <Result col={color.hex} type={type}></Result>
            </div>
          </div>
        </div>
      </div>
      <div className='border-0 accordion-flush'>      
        <Description/>
      </div>
  </div>

  )
} 
