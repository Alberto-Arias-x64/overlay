import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

    value : number = 0

    constructor() { }

    ngOnInit(): void {
        setInterval(() => {
            this.value = this.value += 0.01
            if (this.value >= 1) this.value = 0
        },100)
    }

}
