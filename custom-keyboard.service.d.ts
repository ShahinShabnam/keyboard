import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
export declare class CustomKeyboardService {
    subject: Subject<any>;
    customKeyboardComponentInput: any;
    ngOnInit(): void;
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
