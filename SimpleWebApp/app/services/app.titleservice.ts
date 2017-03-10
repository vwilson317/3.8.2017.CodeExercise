import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TitleService {
    private _actionUrl = 'http://localhost:58949/api/title';

    constructor(private http: Http) {

    }

    get getAll(): Observable<any> {
        return this.http.get(this._actionUrl)
            .map(m => {
                return m.json();
            })
            .do (x => console.log(x));
    }
}