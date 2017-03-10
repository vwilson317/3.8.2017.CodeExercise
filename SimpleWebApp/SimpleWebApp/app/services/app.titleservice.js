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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var TitleService = (function () {
    function TitleService(http) {
        //super(_http);
        //this.getaction<Models.List[]>(this._getTitleListUrl).subscribe(
        //    result => {
        //        this._titleList = result;
        this.http = http;
        this._actionUrl = 'http://localhost:58949/api/title';
        //        if (this._titleList.length > 0) {
        //            this.SelectedList = this._titleList[0];
        //        }
        //    },
        //    error => console.error(error));
    }
    Object.defineProperty(TitleService.prototype, "getAll", {
        get: function () {
            return this.http.get(this._actionUrl)
                .map(function (m) {
                return m.json();
            })
                .do(function (x) { return console.log(x); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TitleService.prototype, "titleList", {
        get: function () {
            if (this._titleList) {
                this._titleList.map(function (m) {
                    if (m.Tasks) {
                        m.Count = m.Tasks.length;
                        m.CountEnded = m.Tasks.filter(function (f) { return f.Ended; }).length;
                    }
                });
            }
            return this._titleList;
        },
        enumerable: true,
        configurable: true
    });
    TitleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TitleService);
    return TitleService;
}());
exports.TitleService = TitleService;
//# sourceMappingURL=app.titleservice.js.map