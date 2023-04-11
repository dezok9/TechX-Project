import React from 'react'
import "./css/App.css";
import "./css/index.css";
import {Accordion} from 'react-bootstrap';

export function Description() {
  return (
    <Accordion>

      <Accordion.Item eventKey="0">
        <Accordion.Header>Deuteranomaly</Accordion.Header>
        <Accordion.Body className="description">
        Deuteranomaly aka red-green color blindness is the most common form of color blindness;
        people with deuteranomaly have a reduced sensitivity to red hues.
        Red and green hues often look very similar, but this is often mild.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Protanomaly</Accordion.Header>
        <Accordion.Body>
        Protanomaly is a type of color blindness where a person only has
        sensitivity to blue and green hues, meaning that they have trouble detecting red hues. 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Tritanomaly</Accordion.Header>
        <Accordion.Body>
        Tritanomaly is a form of color blindness where an individual
        has reduced sensitivity to blue light, making it hard to tell
        the difference between blue and yellow hues. Tritanomaly is
        extremely rare–as few as 0.001% of the population has this form of color blindness.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

// export default AllCollapseExample;