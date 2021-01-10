import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, reduce, switchMap } from 'rxjs/operators';
import entries from 'src/app/mock/entries';
import offsets from 'src/app/mock/offsets';
import { Entry, Offset } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class OffsetService {

  constructor() { }

  public getOffsets(): Observable<Offset[]> {
    return of(offsets);
  }

  public getEntries(): Observable<Entry[]> {
    return of(entries);
  }

  public getTotalsEntry(): Observable<Entry> {
    return this.getEntries()
      .pipe(
        switchMap((entries: Entry[]) => entries as Entry[]),
        reduce((acc: Entry, val: Entry, index: number) => {
          let total = {...acc};
          total.uvp += val.uvp;
          total.price += val.price;

          return total;
        }),
        tap((total: Entry) => {
          total.title = "Gesamt";
          total.id = -1;
        })
      );
  }
}
