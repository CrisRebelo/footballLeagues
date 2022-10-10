import { Injectable } from '@angular/core';
import { compare, SortEvent } from '../data-models/sortable.models';

@Injectable({
  providedIn: 'root'
})
export class SortListService {
    sortList({column, direction}: SortEvent<any>, originalObj: any) {
        let changedObj;
        if (direction === '' || column === '') {
            changedObj = originalObj;
          } else {
            changedObj = [...originalObj].sort((a, b) => {
              const res = compare(a[column], b[column]);
              return direction === 'asc' ? res : -res;
            });
          }
          return changedObj;
    }
}