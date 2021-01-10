import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppHeaderComponent } from './app-header.component';



@NgModule({
  declarations: [AppNavComponent, AppHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [AppHeaderComponent]
})
export class AppHeaderModule { }
