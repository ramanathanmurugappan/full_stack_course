import { Component } from '@angular/core';

@Component({
  selector: 'app-tryproject',
  // template:`<input type=text [(ngModel)]="name"/>
  //  <h1>{{name}}</h1>`,
  template:`<input type="text" value={{name}}/><br/>
  <button type="button" (dblclick)="clickme()">click me</button>
`,
  styleUrls: ['./tryproject.component.scss']
})
export class TryprojectComponent {
  name:string="ram";
  clickme():void{
    this.name="ramanathan";
    console.log("clicked");
  }
}
