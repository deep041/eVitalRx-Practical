import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { CommonService } from '../services/common/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class APIInterceptorInterceptor implements HttpInterceptor {

    constructor(private commonService: CommonService, private _snackBar: MatSnackBar) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.commonService.isShowSpinner = true;
        if (request.body instanceof Object) {
            request = request.clone({
                body: { apikey: 'dwkoortGX8DVYzLP559sGJeWty4wX0de' , ...request.body }
            })
        }
        return next.handle(request).pipe(
            finalize(() => {
                this.commonService.isShowSpinner = false;
            }),
            map((event: any) => {
                if (event && event.body && event.body.status_message) {
                    this._snackBar.open(event.body.status_message, '', {
                        duration: 2000
                    });
                }
                return event;
            })
        )
    }
}
