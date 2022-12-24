import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecureapisInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req:any, next:any) {
    // console.log(localStorage.getItem("token"))
    let reqWithToken = req.clone({
      setHeaders: {
        Authorization: '' + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH'
      }
    })
    return next.handle(reqWithToken)
  }
}
