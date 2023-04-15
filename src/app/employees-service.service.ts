import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getEmployee():Observable<employee[]> {
    return this.http.get<employee[]>(this._url)
  }
}
