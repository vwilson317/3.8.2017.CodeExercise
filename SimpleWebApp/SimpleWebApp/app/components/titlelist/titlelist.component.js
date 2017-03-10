"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_titleservice_1 = require('../../services/app.titleservice');
var TitleListComponent = (function () {
    //public showDialog: boolean;
    function TitleListComponent(_appService) {
        this._appService = _appService;
        this.showdialog = false;
    }
    TitleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        //showDialog = false;
        this._appService.getAll
            .subscribe(function (data) {
            _this._titles = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    };
    Object.defineProperty(TitleListComponent.prototype, "titles", {
        get: function () {
            return this._titles;
        },
        enumerable: true,
        configurable: true
    });
    TitleListComponent = __decorate([
        core_1.Component({
            selector: 'title-list',
            templateUrl: './app/components/titlelist/titlelist.component.html',
            styleUrls: ['./app/components/titlelist/titlelist.component.css']
        }), 
        __metadata('design:paramtypes', [app_titleservice_1.TitleService])
    ], TitleListComponent);
    return TitleListComponent;
}());
exports.TitleListComponent = TitleListComponent;
//# sourceMappingURL=titlelist.component.js.map