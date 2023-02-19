
import './App.css';
import React from 'react';

import logo from './a1.png.svg';

function Alert(){
  alert("Ahtung!");}
class Test extends React.Component{

  render()
  {
    return <h3>{new Date().getDate()}</h3>
  }}

const book={
  name:"A Hero of Our Time",
  surname:"Lermontov",
  name1:"Mikhail Yuryevich",
  genre:"socio-psychological novel",
  rec1:"История души человеческой, хотя бы самой мелкой души, едва ли не любопытнее истории целого народа, особенно когда она – следствие наблюдений ума зрелого над самим собою и когда она писана без тщеславного желания возбудить участие и удивление.",
  rec2:"Книга o человеке c уставшей душой, который многое уже перепробовал и теперь не видит смысла жизни",
  rec3:"Сжигатель душ",
  
  getDateFullName:function(){
    return `${this.surname} ${this.name1}`;
  }
}

class Books extends React.Component{
 
  render(){
    
    return <div>
   <h2>{book.name} -{book.getDateFullName()} </h2>
   
   <p> Genre: {book.genre}</p>
   <p><b>Reviews:</b></p>
   <ul >
    <li>{book.rec1}</li>
    <li>{book.rec3}</li>
    <li>{book.rec2}</li>
    </ul>
    </div>
  }

}

const oasis1={
  title:"",
name:"OASIS",
m1:"Liam Gallagher",
m2:"Noel Gallagher",
m3:"Paul Arthurs",
m4:"Paul McGuigan",
m5:"Andy Bell",
a1:"Definitely Maybe (1994)",
a2:"(What's the Story) Morning Glory? (1995)",
a3:"Be Here Now (1997)",
a4:"Standing on the Shoulder of Giants (2000)",
a5:"Heathen Chemistry (2002)",
a6:"Don't Believe the Truth (2005)",
a7:"Dig Out Your Soul (2008)"


}
class Oasis extends React.Component{



  render(){
    
    return <div>
 <img src={logo} class="i1"></img>
 <h2>{oasis1.name}</h2>
 

 <ul class="d1" >
  <p>Albums:</p>
 <li>{oasis1.a1}</li>
  <li>{oasis1.a2}</li>
  <li>{oasis1.a3}</li>
  <li>{oasis1.a4}</li>
  <li>{oasis1.a5}</li>
  <li>{oasis1.a6}</li>
  <li>{oasis1.a7}</li>
 </ul>
 
 
 <ul class="d2" >
 <p>Members:</p>
  <li>{oasis1.m1}</li>
  <li>{oasis1.m2}</li>
  <li>{oasis1.m3}</li>
  <li>{oasis1.m4}</li>
  <li>{oasis1.m5}</li>
 </ul>

 
  
    </div>
    
  }


}

class WhiskySour extends React.Component{

render(){

return <div>
  <h3>Whisky sour</h3>
<p>Ингридиенты:</p>
<ul class="l2">
  <li>Бурбон,	50	мл</li>
  <li>Ангостура биттер,	1	мл</li>
  <li>Сахарный сироп,	15	мл</li>
  <li>Лимонный сок,	30	мл</li>
  <li>белок перепелиного яйца,	25	мл</li>
  <li>Коктейльная вишня красня,	5	мл</li>
  <li>Лед,	320	мл</li>
</ul>

<ul class="l3">
  <li>Наполни рокс кубиками льда</li>
  <li>Налей в шейкер белок перепелиного яйца 25 мл, лимонный сок 30 мл, сахарный сироп 15 мл и бурбон 50 мл</li>
  <li>Добавь ангостуру биттер 1 дэш</li>
  <li>Тщательно взбей безо льда</li>
  <li>Наполни шейкер кубиками льда и взбей еще раз</li>
  <li>Перелей через стрейнер в рокс</li>
  <li>Укрась коктейльной вишней на шпажке</li>
</ul>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Whiskey_Sour_Served_Up.jpg/274px-Whiskey_Sour_Served_Up.jpg"></img>
</div>

}



}



function App() {
  return (
    <>
    <Books></Books>
    <WhiskySour></WhiskySour>
    <Oasis></Oasis>
    
 
    
    <button value="Button" onClick={Alert} ></button>
    </>
   
  );
}

export default App;

