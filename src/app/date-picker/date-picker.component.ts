import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  date : Date;

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.dateService.getDate().subscribe({
      next: (date) => {
        this.date = date;
      }});
  }

  dateChosen(date : Date) {
    this.dateService.setDate(date);
  }
}