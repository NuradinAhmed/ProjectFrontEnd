import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1> Rendered in {{title}} </h1>',
})
export class AppComponent {
  title:string = 'My first Angular component';
  constructor(){
      console.log("intialized component")
  }
}
