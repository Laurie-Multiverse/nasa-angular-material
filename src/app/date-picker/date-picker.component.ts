import { Component } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  date : Date;

  constructor(private dateService: DateService) {}

  dateChosen(date : Date) {
    this.dateService.setDate(date);
  }
}