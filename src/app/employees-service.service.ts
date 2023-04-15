import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
// {
//   providedIn: 'root'
// }

interface employee {
  'id': number,
  'name': string,
  'age': number
}

@Injectable()
export class EmployeesServiceService {

  private _url = "/assets/employee.json"
  
  constructor(private http: HttpClient) { }

  // getEmployee():Observable<employee[]> {
  //   return this.http.get<employee[]>(this._url)
  // }

  getEmployee(): Observable<employee[]> {

    let employee:employee[] = []

    for(let i=0; i<10000; i++) {
      employee.push({
        "id": i+1,
        "name": faker.name.fullName(),
        "age": faker.datatype.number()
      })
    }

    return of(employee)

  }
}
