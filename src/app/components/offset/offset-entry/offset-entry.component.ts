import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/models';

@Component({
  selector: 'offset-entry',
  templateUrl: './offset-entry.component.html',
  styleUrls: ['./offset-entry.component.scss']
})
export class OffsetEntryComponent {

  @Input()
  entry!: Entry;
  
  @Input()
  index!: Number;

  constructor() { }

}
