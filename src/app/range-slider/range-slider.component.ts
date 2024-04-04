import { Component, OnInit } from '@angular/core';
import { ZoomSizeService } from '../zoom-size.service';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
})
export class RangeSliderComponent implements OnInit{
  zoomSize: number;

  constructor(private zoomSizeService: ZoomSizeService) {}

  ngOnInit(): void {
    this.zoomSizeService.getZoomSize().subscribe({
      next: (zoomSize) => {
        this.zoomSize = zoomSize;
      }});
  }

  resize() {
    this.zoomSizeService.setZoomSize(this.zoomSize);
  }
}
