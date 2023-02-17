import { Component } from '@angular/core';
import { Gallery } from './gallery';
import { gal } from './mock-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  g1=gal;
  SelectedGal:Gallery=gal[0]

  onSelect(item:Gallery):void{
    this.SelectedGal=item;
  }

}
