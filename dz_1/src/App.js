
import './App.css';
import React from 'react';


class Myself extends React.Component{

  render(){
  
  return <div>
    <figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Friedrich_der_Gro%C3%9Fe_%281870%29_-_Google_Art_Project.jpg/274px-Friedrich_der_Gro%C3%9Fe_%281870%29_-_Google_Art_Project.jpg"></img>
<figcaption>Король Пруссии Фридрих II</figcaption>
</figure>
<p>Дата рождения: 24 января 1712</p>
<p>Место рождения: Берлин, Пруссия</p>
<p>Прозвище: Старый Фриц</p>
  </div>
  
  }
  
  
  
  }

class TLV extends React.Component{
  render(){
    return <div>
<h2>TEL AVIV - YAFFO - STATE OF ISRAEL</h2>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hashalom_interchange.jpg/275px-Hashalom_interchange.jpg'></img>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/275px-Tel_Aviv_Promenade_panoramics.jpg"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Panorama_of_Tel_Aviv.jpg/275px-Panorama_of_Tel_Aviv.jpg"></img>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Skyscrapers_of_Tel_Aviv_-_01.jpg/322px-Skyscrapers_of_Tel_Aviv_-_01.jpg'></img>
<h1><b>ЛГБТ в Тель-Авиве</b></h1>
<p>  &nbsp; Тель-Авив является одним из самых популярных мест для туристов ЛГБТ на международном уровне с большим сообществом ЛГБТ. Американский журналист Дэвид Кауфман описал город как место, наполненное духом «мы здесь, мы квиры» (We’re here, we’re queer), более типичным для таких городов, как Сидней и Сан-Франциско.<br></br>

&nbsp; В городе проходит знаменитый парад гордости, самый большой в Азии, ежегодно привлекая более 200 000 человек.<br></br>

&nbsp; В январе 2008 года муниципалитет Тель-Авива основал городской ЛГБТ-центр, предоставляющий все муниципальные и культурные услуги ЛГБТ-сообществу под одной крышей.

В декабре 2008 года Тель-Авив начал собирать группу геев-спортсменов для World Outgames 2009 в Копенгагене.

Кроме того, в Тель-Авиве проходит ежегодный фестиваль фильмов ЛГБТ.</p>
  </div>
  }
}



function App() {
  
  return (
    <>
    <TLV></TLV>
  <Myself></Myself>
 
  </>
  );
 
}

export default App;
