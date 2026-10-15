import { Component } from '@angular/core';
import { RelentlessCrimeDramasService } from 'src/app/services/relentless-crime-dramas.service';
import { TvActionAndAdventureService } from 'src/app/services/tv-action-and-adventure.service';

@Component({
  selector: 'app-relentless-crime-dramas',
  templateUrl: './relentless-crime-dramas.component.html',
  styleUrls: ['./relentless-crime-dramas.component.css']
})
export class RelentlessCrimeDramasComponent {
 relentlesscrimedramas:any;
constructor(private service:RelentlessCrimeDramasService){
  
}
ngOnInit(){
 this.service.fetchingrelentlesscrimedramasdata().subscribe(data=>this.relentlesscrimedramas=data);
}
}
