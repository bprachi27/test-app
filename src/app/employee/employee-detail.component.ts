import { Component } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

interface employee {
  'id': number,
  'first_name': string,
  'last_name': string,
  'gender': string,
  'age': number
}

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  public employees: employee[] = [] 
  public employee: employee | undefined
  
  public formGroup: FormGroup = new FormGroup({
    id    : new FormControl<number | null>(null),
    first_name  : new FormControl<string | null>(null),
    last_name  : new FormControl<string | null>(null),
    gender  : new FormControl<string | null>(null),
    age   : new FormControl<number | null>(null)
  })

  getId() {
    return parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
  }

  constructor(private _employeeService: EmployeesServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    
    // _employeeService.getEmployee().subscribe(
    //   data =>{
    //     this.employees=data
    //     this.employee = this.employees.find((v) => v.id===this.getId()) as employee;
    //   }
    // )
    
    if (this.getId() !== 0){
      
      this.employee = _employeeService.employees.find(v => v.id===this.getId()) as employee
  
      this.formGroup.patchValue({
        id          : this.employee.id,
        first_name  : this.employee.first_name,
        last_name   : this.employee.last_name,
        gender      : this.employee.gender,
        age         : this.employee.age
      })
      
    }

  }

  ngOnInit() {
    
  }

  onSubmit() {
    let employee = this.formGroup.value as employee  
 
    employee.id = this._employeeService.employees.length + 1
    
    console.log(this.employees)

    this._employeeService.employees.push(employee)
    
    this.router.navigate(['/employees'])
  }

  reset() {
    this.formGroup.reset()
  }

  onDelete(formGroup:any) {
    console.log(formGroup)
  }

}
