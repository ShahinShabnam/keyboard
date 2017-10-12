import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
export declare class CustomKeyboardService implements OnInit {
    private _http;
    ngOnInit(): void;
    subject: Subject<any>;
    subscriptions: Subscription;
    inputType: any;
    response: any;
    type: any;
    constructor(_http: Http);
    passvalue(passvalue: string): void;
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
