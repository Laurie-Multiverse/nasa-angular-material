import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NasaImageComponent } from './nasa-image/nasa-image.component';
import { SatellitesComponent } from './satellites/satellites.component';
import { ImageDisplayComponent } from './image-display/image-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    RangeSliderComponent,
    ImageViewComponent,
    NasaImageComponent,
    SatellitesComponent,
    ImageDisplayComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
