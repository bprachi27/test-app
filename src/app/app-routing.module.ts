import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';

const routes: Routes = [
  // {path: 'departments', component: DepartmentComponent},
  // {path: '', redirectTo:'/employees', pathMatch:'full'},
  {path: 'departments', component: DepartmentComponent},
  {path: 'employees', component: EmployeeComponent},
  {path: 'employees/:id', component: EmployeeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentComponent, EmployeeComponent, EmployeeDetailComponent]