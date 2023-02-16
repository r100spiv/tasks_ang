import { Component } from '@angular/core';
import { Person } from './person';
import { per } from './mock-person';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  template: `<div [ngStyle]="{'font-size':'13px', 'font-family':'Verdana'}">
  <h1>Hello Angular 9</h1>
  <p [ngStyle]="{'font-size':'14px', 'font-family':'Segoe Print'}">
      Angular 9 представляет модульную архитектуру приложения
  </p>
</div>`,
styles: [
  `.verdanaFont{font-size:13px; font-family:Verdana;}
  .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
]

})
export class PersonComponent {
p1=per;
Person:Person={
  name:'Cap',
  surename:'Balalaika',
  phone:666,
  city:'Kruvui Rih',
  birthday: new Date(2020, 1, 22)

}
onSelect(item:Person):void{
  this.Person=item;
}


}
