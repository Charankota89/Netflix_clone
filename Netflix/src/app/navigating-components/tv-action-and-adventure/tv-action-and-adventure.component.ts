import { Component } from '@angular/core';
import { TvActionAndAdventureService } from 'src/app/services/tv-action-and-adventure.service';

@Component({
  selector: 'app-tv-action-and-adventure',
  templateUrl: './tv-action-and-adventure.component.html',
  styleUrls: ['./tv-action-and-adventure.component.css']
})
export class TvActionAndAdventureComponent {
 tvactionandadventure:any;
constructor(private service:TvActionAndAdventureService){
  
}
ngOnInit(){
 this.service.fetchingtvactionandadventuredata().subscribe(data=>this.tvactionandadventure=data);
}
}
