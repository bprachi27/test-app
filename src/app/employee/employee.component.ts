import { Component, ViewChild } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';

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
  @ViewChild(MatTable) table: MatTable<employee> | undefined;
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource: employee[] = [];

  constructor(private _employeeService: EmployeesServiceService, private router: Router) {
    _employeeService.getEmployee().subscribe(data => {
      console.log(data)  
      this.employees=data
      this.dataSource=data

      })
  }

  onselect(employee: employee){
    this.router.navigate(['/employees', employee.id])
  }



  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * this.employees.length);
  //   this.dataSource.push(this.employees[randomElementIndex]);
  //   this.table?.renderRows();
  // }

  // removeData() {
  //   this.dataSource.pop();
  //   this.table?.renderRows();
  // }
}
