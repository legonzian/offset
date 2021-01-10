import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule } from './app-header/app-header.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppHeaderModule
  ],
  exports: [AppHeaderModule]
})
export class TemplateModule { }
