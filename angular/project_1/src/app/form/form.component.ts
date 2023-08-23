// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   //templateUrl: './form.component.html',
//   //template: `<input  type="text" [(ngModel)]="name"/> <h1>{{name}}</h1>`,
//   //`<input  type="number" name="mobile" bind-value=getname()/>`,
//   template: `<input type=text [(ngModel)]="name"/> <p>{{name}}</p>`,
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent {
//   name:string="ram";
// //   private mobile_:number=365453553;
// //   getname():number{
// //   return this.mobile_;

// // }

// //   private mobile_:string='hai';
// //   getname():string{
// //   return this.mobile_;

// // }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
 // template: `<input type="text" value={{getName()}}/>`,interploation
  //template: `<input type="text" [value]=getName()/>`,//data binding
 // template: `<input type="text" bind-value=getName() disabled={{isDisable}}/>//data binding
 /* template: `<input type="text" value={{getName()}} />
  <input type="button" (dblclick)="callme()" value="click me"/>
   <input type="text" [(ngModel)]="name"/>
   <p>{{name}}</p>`,*/
   template:`<input type=text [(ngModel)]="name"/>
   <h1>{{name}}</h1>`,
  styleUrls: ['./form.component.css']
})
export class FormComponent {
ngonInit(){}
  name:string="jasdeep";
isDisable:Boolean=false;
test:string="value";
getName():string{
  return this.name;
}
callme():void{
  this.test="button clicked";
  document.write(this.test);
  console.log("hello guys");
}
}
