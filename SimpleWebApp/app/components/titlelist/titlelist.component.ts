import {Component} from '@angular/core';
import {NgControl} from '@angular/common';
import { TitleService } from '../../services/app.titleservice';
import { MdToolbar } from '@angular/material';
import { DetailModalComponent } from './components/detailmodal/detailmodal.component';

@Component({
    selector: 'title-list',
    templateUrl: './app/components/titlelist/titlelist.component.html',
    styleUrls: ['./app/components/titlelist/titlelist.component.css']
})
export class TitleListComponent {
    private _titles: any[];
    showdialog = false;
    //public showDialog: boolean;
    constructor(private _appService: TitleService) {
    }

    ngOnInit() {
        debugger;
        //showDialog = false;
        this._appService.getAll
            .subscribe(data => {
                    this._titles = data;
                },
                error => console.log(error),
                () => console.log('Get all complete'));
    }

    get titles(): any[] {
        return this._titles;
    }

    //get titleList(): Models.List[] {
    //    return this._appService.titleList;
    //}

}