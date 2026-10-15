import { Component } from '@angular/core';
import { MadeinindiaService } from 'src/app/services/madeinindia.service';

@Component({
  selector: 'app-madeinindia',
  templateUrl: './madeinindia.component.html',
  styleUrls: ['./madeinindia.component.css']
})
export class MadeinindiaComponent {
  madeinindia:any;
  constructor(private service:MadeinindiaService){
    
  }
  ngOnInit(){
   this.service.fetchingmadeinindiadata().subscribe(data=>this.madeinindia=data);
  }
  

}
