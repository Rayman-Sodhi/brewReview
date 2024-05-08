import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import moengage from "@moengage/web-sdk";

const root = ReactDOM.createRoot(document.getElementById('root'));
moengage.initialize({app_id: '36EDJNDOCX822951NKI9VZ8T', cluster: 'DC_1'});
moengage.add_email('abc@xyz.com')

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

