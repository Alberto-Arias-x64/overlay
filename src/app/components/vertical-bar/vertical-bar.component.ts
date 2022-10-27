import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-vertical-bar',
    templateUrl: './vertical-bar.component.html',
    styleUrls: ['./vertical-bar.component.scss']
})
export class VerticalBarComponent implements OnInit {

    @Input() value : number = 0
    @Input() color : string = 'green'

    constructor() { }

    ngOnInit(): void {
    }

}
