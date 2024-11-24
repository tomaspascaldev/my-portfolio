import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SendEmail } from '../models/email.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  baseURL: string = 'http://localhost:8080/';

  sendEmail(email : SendEmail) : Observable<any> {
    return this.http.post(this.baseURL + 'send-email', email, {responseType: 'text' })
  }

}