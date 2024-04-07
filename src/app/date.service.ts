import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private date: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());

  getDate(): Observable<Date> {
    return this.date.asObservable();
  }

  setDate(date: Date) {
    this.date.next(date);
  }
  
  destroy() {
    this.date.complete();
  }

}
