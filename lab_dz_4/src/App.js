
import './App.css';
import React  from 'react';


class UserForm extends React.Component {
  constructor(props) {
  super(props);
  var name = props.name;
  var nameIsValid = this.validateName(name);
  var age = props.age;
  var ageIsValid = this.validateAge(age);
  this.state = {name: name, age: age, nameValid: nameIsValid, ageValid: ageIsValid}; 
  this.onNameChange = this.onNameChange.bind(this);
  this.onAgeChange = this.onAgeChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateAge(age){
  return age>=0;
  }
  validateName(name){
    return name?.length>2
    }
    onNameChange(e) {
      var val = e.target.value;
      console.log(val);
      var valid = this.validateName(val);
      this.setState({name: val, nameValid: valid});
      } 
      handleSubmit(e) {
        e.preventDefault();
        if(this.state.nameValid ===true && this.state.ageValid===true){
        alert("Имя: " + this.state.name + " Возраст: " + this.state.age);
        }
        }
        onAgeChange(e) {
          var val = e.target.value;
          var valid = this.validateAge(val)}
        }



export class Person extends React.Component{
static info={name:"Alen",surname:"Delon",country:"France",city:"Paris"};
state={name:Person.info.name,surname:Person.info.surname,country:Person.info.country,city:Person.info.city}
constructor(props){
  super(props);
  this.NameChange=this.NameChange.bind(this);
  this.SurnameChange=this.SurnameChange.bind(this);
  this.CountryChange=this.CountryChange.bind(this);
  this.CityChange=this.CityChange.bind(this);
  this.ResetInfo=this.ResetInfo.bind(this);
}
NameChange(event){
  this.setState({name:event.target.value})
}
SurnameChange(event){
  this.setState({surname:event.target.value})
}
CountryChange(event){
  this.setState({country:event.target.value})
}
CityChange(event){
  this.setState({city:event.target.value})
}
handleSubmit(event) {
  event.preventDefault();
  alert("Данные то ли изменены то ли отправлены успешно =)");
  }

  ResetInfo(event){
    event.preventDefault();
    this.setState({name:Person.info.name,surname:Person.info.surname,country:Person.info.country,city:Person.info.city})
  }
render(){
  return( <>
   <form onSubmit={this.handleSubmit}>
<label>Name:</label>
<br></br>
<input value={this.state.name} onChange={this.NameChange} ></input>
<br></br>
<label>Surname:</label>
<br></br>
<input value={this.state.surname} onChange={this.SurnameChange} ></input>
<br></br>
<label>Country:</label>
<br></br>
<input value={this.state.country} onChange={this.CountryChange} ></input>
<br></br>
<label>City:</label>
<br></br>
<input value={this.state.city} onChange={this.CityChange} ></input>
<br></br>
<br></br>
<input type="submit" value="Send" />
<button  onClick={this.ResetInfo}>Reset</button>


   </form>
   
  </>)
 
}
}


function City(props){
return (<div>

<h3>{props.name}</h3>
<h3>{props.year}</h3>
<h3>{props.population}</h3>
<h3>{props.symbol}</h3>

</div>)



}
export default  function ListInfo(props){

  return(
    <div>
    {
    props.data.map(cit=><City {...cit} key={cit.name}></City>)
    }
    </div>
  )
  
}



 