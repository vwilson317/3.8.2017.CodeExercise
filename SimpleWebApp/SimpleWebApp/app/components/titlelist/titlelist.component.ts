import {Component} from '@angular/core';
import {NgControl} from '@angular/common';
import {TitleService} from '../../services/app.titleservice';

@Component({
    selector: 'titleList',
    templateUrl: './app/components/titlelist/titlelist.component.html',
    styleUrls: ['./app/components/titlelist/titlelist.component.css']
})
export class TitleListComponent {
    constructor(private _appService: TitleService) {
    }

    get titleList(): Models.List[] {
        return this._appService.titleList;
    }

    get SelectedList(): Models.List {
        return this._appService.SelectedList;
    }

    set SelectedList(value: Models.List) {
        this._appService.SelectedList = value;
    }

    get selectedtasks(): Models.Task[] {
        if (this.SelectedList && this.SelectedList.Tasks) {
            return this.SelectedList.Tasks.filter(f => !f.Ended && !this.showendedtask || this.showendedtask);
        }
    }

    newtask: string;
    newlist: string;
    showendedtask: boolean = true;
}