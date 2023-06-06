import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'angular-core'
  };

  // this is a on click
  onLogoClicked(){
    alert('Hello World!')
  }
// when you lift up your key
  onKeyUp(newTitle:string){
    this.data.title = newTitle;
  };

}
