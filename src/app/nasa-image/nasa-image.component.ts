import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { DateService } from '../date.service';

@Component({
  selector: 'app-nasa-image',
  templateUrl: './nasa-image.component.html',
  styleUrls: ['./nasa-image.component.css']
})
export class NasaImageComponent implements OnInit, OnChanges {
  @Input() zoomSize: number;
  date: Date;
  url : string;
  title : string;
  explanation: string;
  formattedDate: string;

  constructor(private nasaApiService : NasaApiService, private dateService : DateService) {  }

  ngOnInit(): void {
    this.dateService.getDate().subscribe({
      next: (date) => {
        this.date = date;
        this.getPictureOfTheDay();
      }});
  }

  ngOnChanges(): void {
    this.getPictureOfTheDay();
  }
  
  getPictureOfTheDay(){
    if (!this.date) return;
    this.formatDate();
    this.nasaApiService.getAstronomyPictureOfTheDay(this.formattedDate).subscribe(
      (data:any) => {
        this.url = data.url;
        this.title = data.title;
        this.explanation = data.explanation;
      },
      (error:any) => {
        console.error(error);
      }
    )
  }

  // formats this.date and saves it in this.formattedDate
  private formatDate(): void {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, '0');
    const day = String(this.date.getDate()).padStart(2, '0');
    this.formattedDate = `${year}-${month}-${day}`;
  }

}
