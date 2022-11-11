import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
    selector: 'app-clock-v1',
    templateUrl: './clock-v1.component.html',
    styleUrls: ['./clock-v1.component.scss']
})
export class ClockV1Component implements AfterViewInit, OnChanges {

    @Input() value: number = 0
    @Input() scale: number = 1
    @ViewChild('needle') needleRef!: ElementRef
    needle: HTMLImageElement | any

    constructor(private cluster: ClusterService) { }

    ngOnChanges(value: SimpleChanges): void {
        try {
            this.needle.style.rotate = `${this.cluster.scaler(this.value, [0, 1], [-112, 112])}deg`
        } catch (error) {
            console.log(error)
        }
    }

    ngAfterViewInit(): void {
        this.needle = this.needleRef.nativeElement
        this.needle.style.rotate = `${this.cluster.scaler(this.value, [0, 1], [-112, 112])}deg`
    }
}
