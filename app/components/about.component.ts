import {Component} from '@angular/core';


@Component({
    selector: 'about',
    templateUrl: 'views/about.html'
})

export class AboutComponent {
  public autor:string;
  public anio:number;

   constructor(){
       this.anio = 2016;
       this.autor = "Ariel Duarte";
   }
}
