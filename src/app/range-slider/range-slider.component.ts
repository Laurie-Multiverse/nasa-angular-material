import { Component, OnInit, OnDestroy } from '@angular/core';
import { ZoomSizeService } from '../zoom-size.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
})
export class RangeSliderComponent implements OnInit, OnDestroy {
  zoomSize: number;
  private subscription : Subscription;

  constructor(private zoomSizeService: ZoomSizeService) {}

  ngOnInit(): void {
    this.subscription = this.zoomSizeService.getZoomSize().subscribe({
      next: (zoomSize) => {
        this.zoomSize = zoomSize;
      }});
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.zoomSizeService.destroy();
  }

  resize() {
    this.zoomSizeService.setZoomSize(this.zoomSize);
  }
}
