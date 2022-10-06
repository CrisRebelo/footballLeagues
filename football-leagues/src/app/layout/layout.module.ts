import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainLayoutComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
