import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  apiUrl: string = environment.url;
  public customer = new BehaviorSubject<any>(null);
  public category = new BehaviorSubject<any>(null);
  public service = new BehaviorSubject<any>(null);

  headers:HttpHeaders = new HttpHeaders();

  constructor(
    private httpClient: HttpClient
  ) {
    this.headers.set('Access-Control-Allow-Origin','*');
    this.headers.set('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
    this.headers.set('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE, PATCH');
  }

  public Get<T>(url:any): Observable<T>{
    return this.httpClient.get<T>(this.apiUrl + url);
  }

  public Post<T>(url:string, Data:any, option?:any):Observable<T>{
    return this.httpClient.post<T>(this.apiUrl + url, {body: Data, headers: {header: this.headers}});
  }

  public Delete<T>(requestUrl: string): Observable<T> {
    return this.httpClient.delete<T>(this.apiUrl + requestUrl);
  }
}
