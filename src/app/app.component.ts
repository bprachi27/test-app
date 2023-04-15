import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  public name = "prachi";
  public message = ''
  showFiller = false;
  
  constructor(private router: Router){

  }

  onDepartment(){
    this.router.navigate(['/departments',])
  }
  onEmployee(){
    this.router.navigate(['/employees',])
  }
}
