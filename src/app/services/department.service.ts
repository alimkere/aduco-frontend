import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/departments';

  getDepartmentList(): Observable<Department[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.departments)
    );
  }
}

interface GetResponse {
  _embedded: {
    departments: Department[];
  }
}
