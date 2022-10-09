import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectFlattenerService {
    nestedObjLength: number = 0;
    constructor() { }

    flattenObject = (obj:any, prefix = '') => {
        let flatData:any = []
        const flattened: any = {}

        Object.keys(obj).forEach((key) => {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                this.nestedObjLength = Object.keys(obj[key]).length;
                prefix = key + '_';
                Object.assign(flattened, this.flattenObject(obj[key], prefix))
            } else {
                if ( this.nestedObjLength === 0 ) prefix = '';
                if ( this.nestedObjLength > 0 ) this.nestedObjLength = this.nestedObjLength - 1;
                flattened[prefix + key] = obj[key]
            }
        })
        flatData.push(flattened)
        return flattened;
    }
}
