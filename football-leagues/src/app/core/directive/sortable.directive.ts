import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SortColumn, SortDirection, SortEvent, rotate } from '../data-models/sortable.models';

@Directive({
    selector: 'th[sortable]',
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
        '(click)': 'rotate()'
    }
})
export class SortableDirective {
    @Input() sortable: SortColumn<any | ''> = '';
    @Input() direction: SortDirection = '';
    @Output() sort = new EventEmitter<SortEvent<any | ''>>();

  rotate() {
      this.direction = rotate[this.direction];
      this.sort.emit({column: this.sortable, direction: this.direction});
  }
}
