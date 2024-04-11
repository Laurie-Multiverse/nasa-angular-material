import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDisplayComponent } from './image-display.component';
import { MaterialModule } from '../material/material.module';
import { AppModule } from '../app.module';

describe('ImageDisplayComponent', () => {
  let component: ImageDisplayComponent;
  let fixture: ComponentFixture<ImageDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDisplayComponent],
      imports: [AppModule,MaterialModule],
    });
    fixture = TestBed.createComponent(ImageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
