import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffsetComponent } from './offset.component';
import { OffsetEntryComponent } from './offset-entry/offset-entry.component';



@NgModule({
  declarations: [OffsetComponent, OffsetEntryComponent],
  imports: [
    CommonModule,
  ],
  exports: [OffsetComponent]
})
export class OffsetModule { }
