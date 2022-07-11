import React, { useState } from "react";
import * as ReactDOMClient from "react-dom/client";

//Component
import OtpInput from "../lib";

const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container!);

const Demo = ({ }) => {

  const [numOfFields, setNumOfFields] = useState(0)
  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <OtpInput numOfFields={numOfFields} />
      </div>
    </div>
  );
};

root.render(<Demo />);
