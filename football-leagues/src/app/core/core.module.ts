import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SearchByTextInputComponent } from './components/search-by-text-input/search-by-text-input.component';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { SortByComponent } from './components/sort-by/sort-by.component';

@NgModule({
  declarations: [
  
    SearchByTextInputComponent,
       DropdownListComponent,
       SortByComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [ ]
})
export class CoreModule { }
