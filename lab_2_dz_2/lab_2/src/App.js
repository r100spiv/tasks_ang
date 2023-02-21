import logo from './logo.svg';
import './App.css';


function Info(props){
return(<>
<h2>{props.a1}</h2>
<p><b>Baptised:</b> {props.a2}</p>
<p><b>Genre: </b>{props.a3}</p>
<p style={{color:'grey'}}><b>Resting place: </b>{props.a4}</p>
</>);

}


function Plays(props){
  return(<>
  <h3>{props.p1.title}</h3>
  <ul>
{props.p1.works.map((q)=><li>{q}</li>)}
</ul>
  </>)
  }


const Plays1={
  title:"Shakespeare's most famous works",
  works:[
    "Antony and Cleopatra",
    "Coriolanus",
    "Hamlet",
    "Julius Caesar",
    "King Lear",
    "Macbeth",
  ]

}

const Pope={
  title:"Young Pope",
  create:"Paolo Sorrentino",
  direct:"Paolo Sorrentino",
  genre:"drama",
  starring:[
    "Jude Law",
    "Diane Keaton",
    "Silvio Orlando",
    "Javier Cámara"
  ],
  relize:"21 October - 2016"
}

function YoungPope(props){
  return(<div>
    <hr></hr>
<h3><b>{props.y1.title}</b></h3>
<img src='https://upload.wikimedia.org/wikipedia/ru/1/1e/The_Young_Pope.png'></img>
<p><b>Created by: {props.y1.create}</b> {props.a2}</p>
<p><b>Written by: {props.y1.direct}</b> {props.a2}</p>
<p style={{color:'grey'}}><b>Genre: </b>{props.y1.genre}</p>
<p><b>Starring:</b></p>
<ul>
{props.y1.starring.map((q)=><li>{q}</li>)}
</ul>
  </div>)
}


function App() {
 let  a1="William Shakespeare";
 let  a2="26 April 1564";
 let  a3="The greatest writer in the English language and the world's pre-eminent dramatist";
 let  a4="Church of the Holy Trinity, Stratford-upon-Avon";


  return (
    <div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg'></img>
    <Info a1={a1} a2={a2} a3={a3} a4={a4} ></Info>
    <Plays p1={Plays1}></Plays>
    <YoungPope y1={Pope}></YoungPope>
    </div>
  );
}

export default App;
