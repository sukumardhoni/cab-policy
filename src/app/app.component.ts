import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showAdmin
  
   foods = [
    {value: 'User-0', viewValue: 'User'},
    {value: 'Admin-1', viewValue: 'Admin'}
  ];

  selected = this.foods[0].value;
  
callType(value){
  console.log(value)
  if(value == 'Admin-1'){
    this.showAdmin = true;
  }else{
    this.showAdmin = false;
  }
}

openDialog() {

};
}