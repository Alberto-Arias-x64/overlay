import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'app-clock-v1',
    templateUrl: './clock-v1.component.html',
    styleUrls: ['./clock-v1.component.scss']
})
export class ClockV1Component implements OnInit, AfterViewInit, OnChanges {

    @Input() value: number = 0
    @Input() scale: number = 1
    @ViewChild('needle') needleRef!: ElementRef
    needle: HTMLImageElement | any

    constructor() { }

    ngOnChanges(value: SimpleChanges): void {
        try {
            this.needle.style.rotate = `${this.scaler(this.value, [0, 1], [-112, 112])}deg`
        } catch (error) {
            console.log(error)
        }
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.needle = this.needleRef.nativeElement
        this.needle.style.rotate = `${this.scaler(this.value, [0, 1], [-112, 112])}deg`
    }

    scaler = (number: number, [inMin, inMax]: Array<number>, [outMin, outMax]: Array<number>): number => {
        return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin
    }

}
