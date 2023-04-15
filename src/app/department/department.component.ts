import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  public departments = [
    {'id': 1, 'name': 'sales'},
    {'id': 2, 'name': 'support'},
    {'id': 3, 'name': 'developers'},
  ]
}
