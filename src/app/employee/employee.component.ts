import { Component } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';
import { Router } from '@angular/router';

interface employee {
  'id': number,
  'name': string,
  'age': number
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  public employees: employee[] = []  
  
  constructor(private _employeeService: EmployeesServiceService, private router: Router) {
    _employeeService.getEmployee().subscribe(
      data => this.employees=data
    )
  }

  onselect(employee: employee){
    this.router.navigate(['/employees', employee.id])
  }
}
