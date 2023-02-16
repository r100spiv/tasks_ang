import { Component } from '@angular/core';
import { Jets } from './jets';
import { jet } from './mock-jets';


@Component({
  selector: 'app-jets',
  templateUrl: './jets.component.html',
  styleUrls: ['./jets.component.css']
})
export class JetsComponent {
  j1=jet;
  SelectedJets:Jets=jet[0]
    
  onSelect(item:Jets):void{
    this.SelectedJets=item;
  }
}
