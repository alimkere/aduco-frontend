import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from '../common/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:8080/api/contacts';
  constructor(private http: HttpClient) {}

  addContact(contact: Contact) {
    return this.http.post<Contact>(this.baseUrl, contact);
  }
}
