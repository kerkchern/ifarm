import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  api_url: String = "http://localhost:9191";

  constructor(private http: HttpClient) { }

  post(url, model): Observable<Object> {
    return this.http.post(this.api_url + url, model).pipe(
      catchError(this.handleError)
    );
  }

  get(url): Observable<Object> {
    return this.http.get(this.api_url + url).pipe(
      catchError(this.handleError)
    );
  }

  put(url,model): Observable<Object> {
    console.log(this.api_url + url);
    return this.http.put(this.api_url + url, model).pipe(
      catchError(this.handleError)
    );
  }

  delete(url): Observable<Object> {
    console.log(this.api_url + url);
    return this.http.delete(this.api_url + url).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error){
    alert('An unexpected error has occured.')
    return throwError(error.message || "Server Error has occured.");
  }
}

