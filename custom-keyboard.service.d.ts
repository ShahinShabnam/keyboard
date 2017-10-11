import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export declare class CustomKeyboardService {
    private _http;
    response: any;
    type: string;
    constructor(_http: Http);
    setInputReference(): Observable<any>;
}
