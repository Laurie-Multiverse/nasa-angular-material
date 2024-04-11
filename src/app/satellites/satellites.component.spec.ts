import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatellitesComponent } from './satellites.component';
import { AppModule } from '../app.module';

describe('SatellitesComponent', () => {
  let component: SatellitesComponent;
  let fixture: ComponentFixture<SatellitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SatellitesComponent],
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(SatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
