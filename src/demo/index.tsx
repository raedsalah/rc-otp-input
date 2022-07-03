import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

//Component
import OtpInput from '../lib';


const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container!);

const Demo = () => {
    return <div><OtpInput /></div>
}

root.render(<Demo />);