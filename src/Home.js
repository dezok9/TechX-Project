import React from 'react'
import {Button} from "./Button.js"
import { Header } from './Header.js'
import {Description} from './Description.js'
import "./css/index.css"
import "./css/App.css";
import NameForm from "./Components/NameForm"
import {Result} from "./Components/Result"



export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(data));
  }, [data]);
  return (
    <div>
      <Header/>
      <div className='d-flex'>
        <div className='col'>
          <div className='d-flex align-items-center justify-content-evenly  click'>
            <Button name="Hex"/>
            <Button name="Color Palette"/>
            <Button name="Rgb"/>
            <NameForm>
              <script>
                
              </script>
            </NameForm>

          </div>
        </div>
        <div className='col'>
          <div className='d-flex align-items-center justify-content-evenly  click'>
            <h1>Result</h1>
            <Result></Result>
          </div>
        </div>
      </div>
      <div>
      
      </div>
      <Description/>

    </div>

  )
} 
