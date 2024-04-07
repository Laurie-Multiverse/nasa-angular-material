import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from '../date.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit, OnDestroy {
  date: Date;
  private subscription: Subscription;

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.subscription = this.dateService.getDate().subscribe({
      next: (date) => {
        this.date = date;
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.dateService.destroy();
  }

  dateChosen(date: Date) {
    this.dateService.setDate(date);
  }
}
