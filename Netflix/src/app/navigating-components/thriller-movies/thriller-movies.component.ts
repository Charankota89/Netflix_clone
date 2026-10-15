import { Component } from '@angular/core';
import { ThrillerMoviesService } from 'src/app/services/thriller-movies.service';

@Component({
  selector: 'app-thriller-movies',
  templateUrl: './thriller-movies.component.html',
  styleUrls: ['./thriller-movies.component.css']
})
export class ThrillerMoviesComponent {
  thrillermovies:any;
constructor(private service:ThrillerMoviesService){
  
}
ngOnInit(){
 this.service.fetchingthrillermoviesdata().subscribe(data=>this.thrillermovies=data);
}
}
