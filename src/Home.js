import React from 'react'
import {Button} from "./Button.js"
import { Header } from './Header.js'
import "./index.css"

export function Home() {
  return (
    <div>
      <Header/>
      <div className='d-flex'>
      <div className='border col'>
        <div className='d-flex align-items-center justify-content-evenly bg-secondary'>
              <Button name="Hex"/>
              <Button name="Color Palette"/>
              <Button name="Rgb"/>
        </div>
      </div>
      <div className='col border'>
        <div className='d-flex align-items-center justify-content-evenly'>
              <Button name="Result"/>
        </div>
      </div>
    </div>
    </div>

  )
} 
