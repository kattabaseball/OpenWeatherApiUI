import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


 // Define the base URL for the weather API
  private apiUrl = 'https://localhost:7070/Weather';

  // Inject HttpClient service to make HTTP requests
  constructor(private http: HttpClient) { }

   // Method to fetch weather data for a given city
  getWeather(city: string): Observable<any> {

    // Make a GET request to the weather API with the city parameter
    return this.http.get(`${this.apiUrl}?city=${city}`);
  }
}
