import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './material/material.module';
import { AppModule } from '../app/app.module';
import { AppComponent } from './app.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';

describe('AppComponent', () => {
  let fixture: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, AppModule],
      declarations: [AppComponent, RangeSliderComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  })

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nasa-angular'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nasa-angular');
  });
});
