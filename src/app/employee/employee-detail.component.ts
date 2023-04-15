import { Component } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';
import { ActivatedRoute } from '@angular/router';

interface employee {
  'id': number,
  'name': string,
  'age': number
}

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Details</h2>
  you selected the employee with id {{employee?.id}}<br>
  <b>{{employee?.id}} {{employee?.name}}-{{employee?.age}}</b>
  `,
  styleUrls: []
})
export class EmployeeDetailComponent {

  public employees: employee[] = [] 
  public employee: employee | undefined
  
  getId() {
    return parseInt(this.route.snapshot.paramMap.get('id') as string)
  }
  constructor(private _employeeService: EmployeesServiceService, private route: ActivatedRoute) {
    _employeeService.getEmployee().subscribe(
      data =>{
        this.employees=data
        this.employee = this.employees.find((v) => v.id===this.getId()) as employee
      }
    )
  }

  ngOnInit() {
    
  }
}
