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

  createDepartment(department: Department): Observable<Department> {
    return this.httpClient.post<Department>(this.baseUrl, department);
  }

  getDepartmentById(departmentId: number): Observable<Department> {
    const departmentUrl = `${this.baseUrl}/${departmentId}`;
    return this.httpClient.get<Department>(departmentUrl);
  }

  updateDepartment(departmentId: number, department: Department): Observable<Department> {
    const departmentUrl = `${this.baseUrl}/${departmentId}`;
    return this.httpClient.put<Department>(departmentUrl, department);
  }

  deleteDepartment(departmentId: number): Observable<any> {
    const departmentUrl = `${this.baseUrl}/${departmentId}`;
    return this.httpClient.delete<any>(departmentUrl);
  }
  
}

interface GetResponse {
  _embedded: {
    departments: Department[];
  }
}
