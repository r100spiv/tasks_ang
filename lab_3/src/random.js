import React,{useState} from 'react';


function Button(props){const quoteArray=["test1", "test2","test3","test4","You are the Best!"];

 const buttonClick=()=>{props.ChangeQuoteFunc(quoteArray[Math.floor(Math.random()*(quoteArray.length-1))]); }

   return( <button onClick={buttonClick}>Click me for random Quote!</button> );}


  function Display(props)
  { return(<div>{props.text}</div>);}

  const RandomQ=()=>{ const[randomQoute,setRandomQuote]=useState("");

  const stateFunc=(superQuote)=>{setRandomQuote(superQuote);}; 
  return( <> <div><Button ChangeQuoteFunc={stateFunc}>
    </Button><Display text={randomQoute}></Display> </div> </> )}

  export default RandomQ;