import React from 'react'
import {parseColor} from '@react-stately/color';
import {ColorSlider} from '@react-spectrum/color'


export function Rgb() {
  let [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <div gap="size-300" wrap>
      <ColorSlider defaultValue="#7f0000" channel="red" />

      <ColorSlider
        label="Hue (uncontrolled)"
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue" />
      <ColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue" />
    </div>
  );
}