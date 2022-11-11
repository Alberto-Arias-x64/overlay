import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClusterService {

    constructor() { }

    scaler = (number: number, [inMin, inMax]: Array<number>, [outMin, outMax]: Array<number>): number => {
        return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin
    }
}
