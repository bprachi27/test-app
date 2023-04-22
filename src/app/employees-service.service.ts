import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
// {
//   providedIn: 'root'
// }

interface employee {
  'id': number,
  'first_name': string,
  'last_name': string,
  'gender': string,
  'age': number
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {

  private _url = "/assets/employee.json"
  public employees:employee[] = []

  constructor(private http: HttpClient) { 
    this.employees = [
      {
        'id': 1,
        'first_name': 'prachi',
        'last_name': 'badami',
        'gender': 'Female',
        'age': 22
      },
      {
        'id': 2,
        'first_name': 'Ayushi',
        'last_name': 'badami',
        'gender': 'Female',
        'age': 20
      },
      {
        'id': 3,
        'first_name': 'Aditya',
        'last_name': 'badami',
        'gender': 'Male',
        'age': 15
      },
    ]
  }

  // getEmployee():Observable<employee[]> {
  //   return this.http.get<employee[]>(this._url)
  // }

  getEmployee(): Observable<employee[]> {

    let employee:employee[] = []
    let gender = [
      'Female',
      'Male',
      'Others'
    ]

    for(let i=0; i<10; i++) {
      employee.push({
        "id": i+1,
        "first_name": faker.name.firstName(),
        "last_name": faker.name.lastName(),
        "gender": gender[faker.datatype.number({min:0,max:gender.length-1})],
        "age": faker.datatype.number({min:20,max:55})
      })
    }

    return of(employee)

  }
}
