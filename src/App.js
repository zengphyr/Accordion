import logo from './logo.svg';
import './App.css';
import {Accordion} from './Accordion.js'

import React, { useState } from "react"



function App() {
  return (
    <div>
      <Accordion title="USA">
        Sample
      </Accordion>
      <Accordion title="Korea">
        Sample text
      </Accordion>
      <Accordion title="England" isOpen="true">
        Sample text
      </Accordion>
    </div>
  );
}

export default App;
