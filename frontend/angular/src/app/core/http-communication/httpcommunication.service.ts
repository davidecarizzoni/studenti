import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, filter, map, retry} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpcommunicationService {

  apiURL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods per chiamate http di base
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch employees list
  getCall(endpoint:string): Observable<any> {
    return this.http.get<any>(this.apiURL + endpoint)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  putCall(endpoint:string,body:any){
    return this.http.put<any>(this.apiURL + endpoint,body)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  postCall(endpoint:string,body:any){
    return this.http.post<any>(this.apiURL + endpoint,body)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getDetail(id:string,endpoint:string): Observable<any> {
    return this.http.get<any>(this.apiURL + endpoint+ '/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error: { error: { message: string,text:string }; status: any; message: any; }) {
     let errorMessage = '';

     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = error.error.text;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}
