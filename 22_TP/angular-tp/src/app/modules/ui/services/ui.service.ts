import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';

// Services
import { HttpResponseService } from '../../core/services/http-response.service';

@Injectable()
export class UiService {

    /**
     * Creates an instance of UiService.
     * @param {HttpClient} http
     * @param {HttpResponseService} httpRespService
     * @memberof UiService
     */
    constructor(
        private http: HttpClient,
        private httpRespService: HttpResponseService
    ) { }

    /**
     * Test call service
     *
     * @returns {Observable<any>}
     * @memberof UiService
     */
    call(): Observable<any> {
        return this.http
            .get(`https://api.github.com/emojiss`)
            .map((response: HttpResponse<any>) => response)
            .catch(this.httpRespService.handleError);
    }
}