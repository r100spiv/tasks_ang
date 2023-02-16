import { Component } from '@angular/core';

import {FamousService} from './famousservice';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css'],
  providers:[FamousService]
})
export class FamousComponent {
  items: string[] = [];
  name: string=" ";
  constructor(private FamousService: FamousService){}
  addItem(name: string){  this.FamousService.addData(name);
  }
  ngOnInit(){
  this.items = this.FamousService.getData();
  }
  

}
