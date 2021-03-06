import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

function App() {
  const [status, setStatus] = useState("Not Delivered");
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <h1>The package is: {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
      <input type="checkbox" value={checked} onClick={() => setChecked(!checked)}></input>
      <p>checked: {checked ? "checked": "unchecked"}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App name="Alex"/>
  </React.StrictMode>,
  document.getElementById('root')
);
