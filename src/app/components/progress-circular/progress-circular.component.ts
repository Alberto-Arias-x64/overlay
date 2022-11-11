import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
    selector: 'app-progress-circular',
    templateUrl: './progress-circular.component.html',
    styleUrls: ['./progress-circular.component.scss']
})
export class ProgressCircularComponent implements OnChanges {

    @Input() image!: string
    @Input() value: number = 1
    @ViewChild('progress') progressRef!: ElementRef
    progress: HTMLImageElement | any
    color: string = 'aliceblue'

    constructor(private cluster: ClusterService) { }

    ngOnChanges(value: SimpleChanges): void {
        try {
            this.validateColor()
            this.progress.style.background = ` conic-gradient(${this.color} ${this.cluster.scaler(this.value, [0, 1], [0, 360])}deg, transparent 0deg)`
        } catch (error) {
            console.log(error)
        }
    }

    ngAfterViewInit(): void {
        this.validateColor()
        this.progress = this.progressRef.nativeElement
        this.progress.style.background = ` conic-gradient(${this.color} ${this.cluster.scaler(this.value, [0, 1], [0, 360])}deg, transparent 0deg)`
    }

    validateColor(): void {
        if(this.value <= 0.25) this.color = 'crimson'
        else this.color = 'aliceblue'
    }

}
