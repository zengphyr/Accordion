import logo from './logo.svg';
import './App.css';

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
      <Accordion title="England" isExpand="true">
        Sample text
      </Accordion>
    </div>
  );
}

const Accordion = ({ children, title, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand);
  return (
    <div className="box">
      <div className="title-box" onClick={() => setExpand(expand => !expand)}>
        <span className="title">{title}</span>
        <span className="icon"><i className={`fa fa-play-circle${!expand ? ' down' : ''}`}></i></span>
        <div className="clearfix"></div>
      </div>
      {expand && <div className="content">{children}</div>}
    </div>
  )
}

export default App;
