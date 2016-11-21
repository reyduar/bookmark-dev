import {Component} from '@angular/core';


@Component({
    selector: 'footer',
    templateUrl: 'app/views/footer.html'
})

export class FooterComponent {
  public autor:string;
  public anio:number;

   constructor(){
       this.anio = 2016;
       this.autor = "Ariel Duarte";
   }
}
