import React, { useState } from "react";
import * as ReactDOMClient from "react-dom/client";

//styles
import "./style.css"

//Component
import OtpInput from "../lib";

const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container!);

const Demo = ({ }) => {

  const [numOfFields, setNumOfFields] = useState(2)
  return (
    <div className="wrapper">
      <div className="sidepanel">
        <label>Number of fields</label>
        <input type="number" min="2" max="12" value={numOfFields} onChange={e => setNumOfFields(e.target.value)} />
      </div>
      <div className="content-wrapper">

        <OtpInput numOfFields={numOfFields} />
      </div>
    </div>
  );
};

root.render(<Demo />);
