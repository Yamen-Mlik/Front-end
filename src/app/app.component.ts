import { Component } from '@angular/core';
import { Devise } from './model/devise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  

  actions:Array<any> =
  [
  
    

  ]

  actionCourante:any;

  setActionCourante(a :any)
  {
    this.actionCourante=a;  
  }  
}