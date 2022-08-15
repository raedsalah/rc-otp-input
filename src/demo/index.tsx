import React, { createContext, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

//styles
import "./style.css";

//Component
import OtpInput from "../lib";
import Sidepanel from "./components/Sidepanel";

//other
const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container!);

//interfaces
interface DemoContextInterface {
  properties: any;
  setProperties: any
}

export const DemoContext = createContext<DemoContextInterface | any>(null);

const Demo = () => {
  const [states, setProperties] = useState({
    numOfFields: 2,
    defaultValue: "",
    invalid: false
  })

  console.log(states.defaultValue);

  return (
    <DemoContext.Provider value={{ states, setProperties }}>
      <div className="wrapper">
        <Sidepanel />
        <div className="content-wrapper">
          <OtpInput defaultValue={states.defaultValue} invalid={states.invalid} numOfFields={states.numOfFields} />
        </div>
      </div>
    </DemoContext.Provider>
  );
};

root.render(<Demo />);
