import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from 'src/app/models';
import { OffsetService } from './offset.service';

@Component({
  selector: 'offset',
  templateUrl: './offset.component.html',
  styleUrls: ['./offset.component.scss']
})
export class OffsetComponent implements OnInit {

  constructor(public offsetService: OffsetService) { }

  public entries$: Observable<Entry[]> = this.offsetService.getEntries();

  public totalsEntry$: Observable<Entry> = this.offsetService.getTotalsEntry();

  ngOnInit(): void {
  }

}
