import React from 'react'
import {parseColor} from '@react-stately/color';
import {ColorSlider} from '@react-spectrum/color'
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';



export function Rgb() {
  let [color, setColor] = React.useState(parseColor('#ff00ff'));
  return (
    <Provider theme={defaultTheme} class="text-center">
      <ColorSlider channel="red" value={color} onChange={setColor} />
      <ColorSlider channel="green" value={color} onChange={setColor} />
      <ColorSlider channel="blue" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </Provider>
  );
}