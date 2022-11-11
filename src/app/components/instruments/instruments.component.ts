import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
    selector: 'app-instruments',
    templateUrl: './instruments.component.html',
    styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnChanges {

    @Input() value: number = 1
    @ViewChild('progress') progressRef!: ElementRef
    progress: HTMLImageElement | any
    color: string = 'aliceblue'

    constructor(private cluster: ClusterService) { }

    ngOnChanges(value: SimpleChanges): void {
        try {
            this.validateColor()
            this.progress.style.width = `${this.cluster.scaler(this.value, [0, 1], [0, 100])}%`
            this.progress.style.backgroundColor = `${this.color}`
        } catch (error) {
            console.log(error)
        }
    }

    ngAfterViewInit(): void {
        this.validateColor()
        this.progress = this.progressRef.nativeElement
        this.progress.style.width = `${this.cluster.scaler(this.value, [0, 1], [0, 100])}%`
        this.progress.style.backgroundColor = `${this.color}`
    }

    validateColor(): void {
        if(this.value <= 0.25) this.color = 'crimson'
        else this.color = 'aliceblue'
    }

}
