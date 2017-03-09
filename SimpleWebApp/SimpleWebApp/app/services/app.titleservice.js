"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var HttpHelpers_1 = require('../utils/HttpHelpers');
require('rxjs/Rx');
var TitleService = (function (_super) {
    __extends(TitleService, _super);
    function TitleService(http) {
        var _this = this;
        _super.call(this, http);
        this.http = http;
        this._getTitleListUrl = 'Home/GetTitleList';
        this.getaction(this._getTitleListUrl).subscribe(function (result) {
            _this._titleList = result;
            if (_this._titleList.length > 0) {
                _this.SelectedList = _this._titleList[0];
            }
        }, function (error) { return console.error(error); });
    }
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
}(HttpHelpers_1.HttpHelpers));
exports.TitleService = TitleService;
//# sourceMappingURL=app.titleservice.js.map