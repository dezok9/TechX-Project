import React from 'react'
import {parseColor} from '@react-stately/color';
import {ColorSlider} from '@react-spectrum/color'
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import { render } from '@testing-library/react';



export class Rgb extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      color: parseColor('#ff00ff')
    };
  }
  render() {
    return (
      <div>
        <Provider theme={defaultTheme} class="text-center">
          <div>
          <ColorSlider channel="red" value={this.state.color} onChange={() => this.setState({ color: this.state.color})}/>
          <ColorSlider channel="green" value={this.state.color} onChange={() => this.setState({ color: this.state.color})} />
          <ColorSlider channel="blue" value={this.state.color} onChange={() => this.setState({ color: this.state.color})} />
          </div>
      </Provider>
      <div classname="border" style={{background: this.state.color.toString}}>dfljalsdjflkajskldfj</div>
  
      </div>
    )
  }
}