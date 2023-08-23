import { Component } from '@angular/core';

@Component({
  selector: 'app-file',
  // template: `<input type="text" value={{getname()}}/>
  // template: `<input type="text" [value]=getname()/
  template: `<input type="text" bind-value=getname()/>

  <h1>hi ram</h1>`,
  styles: [`h1 { color :red; }`]
})
export class FileComponent {
private name:string="ram";
getname():string{
  return this.name;
}
}
