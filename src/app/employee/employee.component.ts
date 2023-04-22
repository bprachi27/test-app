import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';
import { Router } from '@angular/router';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { Subscription } from 'rxjs';


interface employee {
  'id': number,
  'first_name': string,
  'last_name': string,
  'gender': string,
  'age': number
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'gender', 'age'];
  dataSource = new TableVirtualScrollDataSource<employee>([]);
  options = ['jujkuj'];

  subs = new Subscription();

  constructor(
    private _employeeService: EmployeesServiceService, 
    private router: Router, 
  ) {
    // const subs1 = this._employeeService.getEmployee().subscribe(data => {
      
    //   this.dataSource.data = data;
    // });

    // this.subs.add(subs1);

    this.dataSource.data = _employeeService.employees
  }

  ngAfterViewInit(): void {
   
  }

  ngOnDestroy(): void {
    
    this.subs.unsubscribe();
  }

  
  
  onselect(employee: employee){
    this.router.navigate(['/employees', employee.id])
  }

  addEmployee(){
    this.router.navigate(['/employees', this._employeeService.employees.length])
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
