import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  queryObject ={
    maleStatus:false,
    femaleStatus:false,
    inputQuery:""
  }

  queryChangeEvent(e){
    this.queryObject=e;
  }
}
