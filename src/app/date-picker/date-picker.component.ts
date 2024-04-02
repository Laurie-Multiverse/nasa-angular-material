import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  @Input() date : Date;
  @Output() dateChange = new EventEmitter<Date>();

  dateChosen(date : Date) {
    date = this.date;
    this.dateChange.emit(this.date);
  }
}