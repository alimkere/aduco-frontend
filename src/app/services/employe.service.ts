import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employe } from '../common/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  getAllEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.baseUrl}/employes`);
  }

  getEmployeById(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.baseUrl}/employes/${id}`);
  }

  getAllEmployesByDepartmentId(departmentId: number, page: number, size: number): Observable<Employe[]> {
    const params = { page: page.toString(), size: size.toString() };
    return this.http.get<Employe[]>(`${this.baseUrl}/departments/${departmentId}/employes`, { params });
  }

  createEmploye(departmentId: number, employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(`${this.baseUrl}/departments/${departmentId}/employes`, employe);
  }

  updateEmploye(departmentId: number, employeId: number, employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(`${this.baseUrl}/departments/${departmentId}/employes/${employeId}`, employe);
  }

  deleteEmploye(id: number): Observable<Employe> {
    return this.http.delete<Employe>(`${this.baseUrl}/employes/delete/${id}`);
  }

  patchEmploye(id: number, employe: Employe): Observable<Employe> {
    return this.http.patch<Employe>(`${this.baseUrl}/employes/patch/${id}`, employe);
  }
}
