import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
const API_KEY = environment.apiKey || 'Fbc6i3XjnJIJcmQSZzwaMfojz9A5DIgQXJBbIIZE';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private apiKey = API_KEY;

  constructor(private http: HttpClient) {}

  getAstronomyPictureOfTheDay(date?:string): Observable<any> {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${date}`;
    return this.http.get(url);
  }

  getSatellites(): Observable<any> {
    const url = "https://tle.ivanstanojevic.me/api/tle";
    return this.http.get(url);
  }
}