import { Component } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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

  employees: employee[] = [];
  employee: employee | undefined;
  
  formGroup = new FormGroup({
    id          : new FormControl<number | null>(0),
    first_name  : new FormControl<string | null>(null, []),
    last_name   : new FormControl<string | null>(null, [Validators.required, Validators.maxLength(100)]),
    gender      : new FormControl<string | null>(null, [Validators.required]),
    age         : new FormControl<number | null>(null, [Validators.required, Validators.max(90), Validators.min(0)])
  });

  get id() {

    return parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string);
  }

  constructor(
    private employeeService: EmployeesServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router)
   {
    
    if (this.id !== 0) {
      
      this.employee = employeeService.employees.find(v => v.id===this.id) as employee
  
      this.formGroup.patchValue({
        id          : this.employee.id,
        first_name  : this.employee.first_name,
        last_name   : this.employee.last_name,
        gender      : this.employee.gender,
        age         : this.employee.age
      });
    }

    (this.formGroup.get('first_name') as AbstractControl).setValidators([Validators.required, Validators.maxLength(100), this.uniqueName.bind(this)]);
}

  onSave() {
    let employee = this.formGroup.value as employee  
 
    employee.id = this.employeeService.employees.length + 1
    
    this.employeeService.employees.push(employee)
    
    this.router.navigate(['/employees'])
  }

  onUpdate() {
    let employee = this.formGroup.value as employee;
    
    let employeeIndex = this.employeeService.employees.findIndex(v => v.id == employee.id)

    this.employeeService.employees[employeeIndex] = employee
    
    this.router.navigate(['/employees'])
  }

  reset() {
    this.formGroup.reset()
  }

  onDelete(formGroup:any) {
    
    const index = this.employeeService.employees.findIndex(v => v.id == formGroup.get('id').value)

    index > -1 ? this.employeeService.employees.splice(index,1) : null

    this.router.navigate(['/employees'])
  }

  firstNameError(): string {
    const formControl = this.formGroup.get('first_name') as FormControl;

    return formControl.hasError('required') ? "First name is required" :
            formControl.hasError('maxlength') ? "value must be less than 100 characters" :
            formControl.hasError('uniqueName') ? "this name is already exists" : '';
  }

  lastNameError() {
    
    const formControl = this.formGroup.get('last_name') as FormControl;

    return formControl.hasError('required') ? "Last name is required" :
            formControl.hasError('maxlength') ? "value must be less than 100 characters" : '';
  }
  
  ageError() {

    const formControl = this.formGroup.get('age') as FormControl;

    return formControl.hasError('required') ? "age is required" :  '';
  }
  
  genderError() {

    const formControl = this.formGroup.get('gender') as FormControl;

    return formControl.hasError('required') ? "gender is required" :  '';
  }

  uniqueName(control: AbstractControl): {[key: string]: any} | null {

    if (this.employeeService.employees.filter(v => v.id !== this.id).find(v => v.first_name === control.value)) {

      return {
        'uniqueName' : true
      };
    
    } else {
    
      return null;
    }
  }
}
