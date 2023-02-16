import { Component } from '@angular/core';
import { hobby } from './listhobby';
import { hobb } from './mock-hobby';


@Component({
  selector: 'app-new-hobbylist',
  templateUrl: './new-hobbylist.component.html',
  styleUrls: ['./new-hobbylist.component.css'],
  
})
export class NewHobbylistComponent {

items = hobb;
SelectedItem:hobby={name:" "}

onSelect(item:hobby):void{
  this.SelectedItem=item
}

  
  
}


