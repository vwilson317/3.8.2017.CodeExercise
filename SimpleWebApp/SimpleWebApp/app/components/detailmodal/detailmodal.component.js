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
//import { trigger, state, style, animate, transition} from '@angular/core';
var DetailModalComponent = (function () {
    function DetailModalComponent() {
        this.closable = true;
        this.visibleChange = new core_1.EventEmitter();
    }
    DetailModalComponent.prototype.ngOnInit = function () {
        debugger;
        //this.visible = false;
    };
    DetailModalComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DetailModalComponent.prototype, "closable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DetailModalComponent.prototype, "visible", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DetailModalComponent.prototype, "visibleChange", void 0);
    DetailModalComponent = __decorate([
        core_1.Component({
            selector: 'detail-modal',
            templateUrl: 'app/components/detailmodal.component.html',
            styleUrls: ['app/components/detailmodal.component.css'],
            animations: [
                core_1.trigger('dialog', [
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'scale3d(.3, .3, .3)' }),
                        core_1.animate(100)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(100, core_1.style({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailModalComponent);
    return DetailModalComponent;
}());
exports.DetailModalComponent = DetailModalComponent;
//# sourceMappingURL=detailmodal.component.js.map