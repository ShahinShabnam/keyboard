import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export declare class AppService {
    subject: Subject<any>;
    customKeyboardComponentInput: any;
    ngOnInit(): void;
    filterOn(id: string): Observable<any>;
    emit(id: string, options?: any): void;
}
