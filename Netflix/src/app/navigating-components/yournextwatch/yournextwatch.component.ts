import { Component } from '@angular/core';
import { YournextwatchService } from 'src/app/services/yournextwatch.service';

@Component({
  selector: 'app-yournextwatch',
  templateUrl: './yournextwatch.component.html',
  styleUrls: ['./yournextwatch.component.css']
})
export class YournextwatchComponent {
  yournextwatch:any;
  constructor(private service:YournextwatchService){
    
  }
  ngOnInit(){
   this.service.fetchingyournextwatchdata().subscribe(data=>this.yournextwatch=data);
  }
  

}
