import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffsetModule } from './offset/offset.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OffsetModule
  ],
  exports: [OffsetModule]
})
export class ComponentsModule { }
