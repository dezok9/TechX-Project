import React from "react"
import {Rgb} from "./Rgb.js"

class Color extends React.Component {
    constructor(props) {
      super(props)
  
      this.handler = this.handler.bind(this)
    }
  
    handler() {
      this.setState({
        someVar: 'some value'
      })
    }
  
    render() {
      return( 
        <Rgb handler = {this.handler} />

      )
    }
  }
  