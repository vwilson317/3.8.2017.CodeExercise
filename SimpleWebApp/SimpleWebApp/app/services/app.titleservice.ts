import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpHelpers} from '../utils/HttpHelpers';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TitleService extends HttpHelpers {

    private _getTitleListUrl = 'Home/GetTitleList';

    private _titleList: Models.List[];

    constructor(private http: Http) {
        super(http);

        this.getaction<Models.List[]>(this._getTitleListUrl).subscribe(
            result => {
                this._titleList = result;

                if (this._titleList.length > 0) {
                    this.SelectedList = this._titleList[0];
                }
            },
            error => console.error(error));
    }

    get titleList(): Models.List[] {
        if (this._titleList) {
            this._titleList.map(m => {
                if (m.Tasks) {
                    m.Count = m.Tasks.length;
                    m.CountEnded = m.Tasks.filter(f => f.Ended).length;
                }
            });
        }

        return this._titleList;
    }

    SelectedList: Models.List;
}