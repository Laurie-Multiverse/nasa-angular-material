import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaImageComponent } from './nasa-image.component';

describe('NasaImageComponent', () => {
  let component: NasaImageComponent;
  let fixture: ComponentFixture<NasaImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
