import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Employe } from '../common/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/employes';

  getEmployeList(): Observable<Employe[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.employes)
    );
  }
}

interface GetResponse {
  _embedded: {
    employes: Employe[];
  }
}
