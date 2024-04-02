import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
})
export class RangeSliderComponent {
  @Input() zoomSize: number;
  @Output() zoomSizeChange = new EventEmitter<number>();

  resize() {
    this.zoomSizeChange.emit(this.zoomSize);
  }
}
