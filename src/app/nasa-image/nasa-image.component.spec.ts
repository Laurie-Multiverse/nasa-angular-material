import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaImageComponent } from './nasa-image.component';
import { AppModule } from '../app.module';

describe('NasaImageComponent', () => {
  let component: NasaImageComponent;
  let fixture: ComponentFixture<NasaImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [NasaImageComponent]
    });
    fixture = TestBed.createComponent(NasaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
