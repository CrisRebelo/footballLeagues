import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SearchByTextInputComponent } from './components/search-by-text-input/search-by-text-input.component';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { SortableDirective } from './directive/sortable.directive';
@NgModule({
  declarations: [
    SearchByTextInputComponent,
    DropdownListComponent,
    SortByComponent,
    SortableDirective
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    SortableDirective
  ]
})
export class CoreModule { }
