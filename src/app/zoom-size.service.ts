import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoomSizeService {
  private zoomSize: BehaviorSubject<number> =  new BehaviorSubject<number>(100);

  getZoomSize(): Observable<number> {
    return this.zoomSize.asObservable();
  }

  setZoomSize(zoomSize: number) {
    this.zoomSize.next(zoomSize);
  }

  destroy() {
    this.zoomSize.complete();
  }

}
