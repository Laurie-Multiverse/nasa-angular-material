import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-satellites',
  templateUrl: './satellites.component.html',
  styleUrls: ['./satellites.component.css'],
})
export class SatellitesComponent implements OnInit {
  satellites: any;

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.nasaApiService
      .getSatellites()
      .subscribe((satellites: any) => (this.satellites = satellites));
  }
}
