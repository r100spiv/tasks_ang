import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListInfo from './App.js';
import './App.js'

import reportWebVitals from './reportWebVitals';
//import UserForm, {  ListInfo, Person } from './App';

const cities=[
  {name:"Kyiv",year:"1022 р.",population:"3,000,000 млн",symbol:"kawtan"},
  {name:"Kyiv",year:"1022 р.",population:"3,000,000 млн",symbol:"kawtan"},
  {name:"Kyiv",year:"1022 р.",population:"3,000,000 млн",symbol:"kawtan"},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ListInfo data={cities}></ListInfo>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
