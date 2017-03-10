import {Component} from '@angular/core';
import {NgControl} from '@angular/common';
import {TitleService} from '../../services/app.titleservice';

@Component({
    selector: 'title-list',
    templateUrl: './app/components/titlelist/titlelist.component.html',
    styleUrls: ['./app/components/titlelist/titlelist.component.css']
})
export class TitleListComponent {
    private  _titles: any[];
    constructor(private _appService: TitleService) {

    }

    ngOnInit() {
        this._appService.getAll
            .subscribe(data => {
                    debugger;
                    this._titles = data;
                },
                error => console.log(error),
                () => console.log('Get all complete'));
    }

    get titles(): any[] {
        debugger;
        return this._titles;
    }

    //get titleList(): Models.List[] {
    //    return this._appService.titleList;
    //}

}