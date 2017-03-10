import {
    Component, OnInit, Input, Output, OnChanges, EventEmitter,
    trigger, state, style, animate, transition
} from '@angular/core';

//import { trigger, state, style, animate, transition} from '@angular/core';

@Component({
    selector: 'detail-modal',
    templateUrl: 'app/components/detailmodal.component.html',
    styleUrls: ['app/components/detailmodal.component.css'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({ transform: 'scale3d(.3, .3, .3)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
            ])
        ])
    ]
})
export class DetailModalComponent implements OnInit {
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
        debugger;
        //this.visible = false;
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
}