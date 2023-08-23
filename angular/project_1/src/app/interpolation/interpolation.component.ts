import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  name:string='qwerty'
  employee:any={
    name:'money',
    salary:5,
    empid:1234567
  }

setframe(val:any){
  console.log(val)
  this.employee.name=val
}

}
