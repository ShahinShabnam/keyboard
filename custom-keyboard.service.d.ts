import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
export declare class CustomKeyboardService {
    private _http;
    subject: Subject<any>;
    response: any;
    type: any;
    constructor(_http: Http);
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
