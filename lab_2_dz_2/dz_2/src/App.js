
import './App.css';


function Person(props){
  return(<div class="d1">
    <h3 >{props.p1.name}</h3>
  <figure >
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/William_Sydney_Porter_by_doubleday.jpg/220px-William_Sydney_Porter_by_doubleday.jpg'></img>
    <figcaption>Portrait by W. M. Vanderweyde (1909)</figcaption>
  </figure>
  <p>Pen name: {props.p1.penname}</p>
    <p>Occupation: {props.p1.occup}</p>
    <p>Born: {props.p1.b1}</p>
    <p>Died: {props.p1.b2}</p>
    <p>Resting place: {props.p1.place}</p>
   
    
    </div>);
    }
function Manul(props){
  return(<>
  <div class="d2">
    <h3 >{props.m1.name}</h3>
   
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Felis_manul_-Howletts_Wild_Animal_Park_-8.jpg/200px-Felis_manul_-Howletts_Wild_Animal_Park_-8.jpg' class="img2"></img>
  
  
  <div class="d3">
    <ul>
      <li>Kingdom: {props.m1.king}</li>
      <li>Phylum: {props.m1.phyl}</li>
      <li>Class: {props.m1.class}</li>
    </ul>
  </div>
  <hr></hr>
  <p>Characteristics</p>
    <p class="m1">The Pallas's cat's fur is light grey with pale yellowish-ochre or pale yellowish-reddish hues.[6] Some hair tips are white and some blackish. Its fur is greyer and denser with fewer markings visible in winter than in the summer</p>
  </div>
  </>)
}


const per={
  name:"William Sydney Porter",
  b1:"September 11, 1862",
  b2:"June 5, 1910 (aged 47)",
  place:"Riverside Cemetery, Asheville, NC",
  penname:"O. Henry, Olivier Henry, Oliver Henry",
  occup:"Writter",
  genre:"Short stroy"

}
const manul={
  name:"Pallas's cat",
  king:"Animalia",
  phyl:"Chordata",
  class:"Mammalia"

}





function App() {
  return (
    <>
    <Person p1={per}></Person>
    <Manul m1={manul}></Manul>
    </>
  );
}

export default App;
