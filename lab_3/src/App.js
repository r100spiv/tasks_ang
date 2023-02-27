
import './App.css';
import React, { useState } from "react";


class Button extends React.Component {  render() {
  const btnClick = () => {
  this.props.onClickAct(this.props.btText);
  };
  return (
  <button onClick={btnClick}> +{this.props.btText} </button>
  );
  }
  }

class Display extends React.Component {  render() {
  return <h3>
  {this.props.displayText}
  </h3>;
  }
  }
 
 






  
export default class App extends React.Component {  constructor(props) {
super(props);
this.state = { currentValue:0 };
}
render() {
const incButtonVal = 11;
const incButtonVal2 =111;
const incButtonVal3 = 1111;
const handlerClick = incValue => {
this.setState({ currentValue: this.state.currentValue + incValue });
};
return (
<>
<Button btText={incButtonVal} onClickAct={handlerClick} />
<Button btText={incButtonVal2} onClickAct={handlerClick} />
<Button btText={incButtonVal3} onClickAct={handlerClick} />
<Display displayText={this.state.currentValue}/>

</>
);
}
}

