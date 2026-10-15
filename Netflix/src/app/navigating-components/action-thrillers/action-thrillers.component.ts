import { Component } from '@angular/core';
import { ActionThrillersService } from 'src/app/services/action-thrillers.service';

@Component({
  selector: 'app-action-thrillers',
  templateUrl: './action-thrillers.component.html',
  styleUrls: ['./action-thrillers.component.css']
})
export class ActionThrillersComponent {
  actionthrillers:any;
  constructor(private service:ActionThrillersService){

}
ngOnInit(){
  this.service.fetchingactionthrillersdata().subscribe(data=>this.actionthrillers=data);
}
}