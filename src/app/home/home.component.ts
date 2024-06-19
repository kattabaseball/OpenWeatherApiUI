import { Component } from '@angular/core';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cities = ['Kadawatha', 'Piliyandala', 'Anuradhapura', 'California', 'Yokohama', 'Batticaloa'];
  weather: any;
  imageUrl!: string;

  // Inject the WeatherService into the component
  constructor(private weatherService: WeatherService) { }


  ngOnInit(): void {
  }

  // Method to get weather data when a city is selected
  getWeather(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const city = selectElement.value;

    // Subscribe to the weather service to get weather data for the selected city
    this.weatherService.getWeather(city).subscribe(data => {
      console.log(data);

      this.weather = data;

      // Update the image URL based on the weather condition
      this.changeImageUrl(this.weather.weather[0].main);


    });
  }

  // Method to change the image URL based on the weather type
  changeImageUrl(weatherType: string) {

    switch (weatherType.toLowerCase()) {
      case "clear":
        this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQO-eJLuXBwNMhCSRt-uNlaSXbwfN_Q_ctQ&s";
        break;
      case "clouds":
        this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53je0O_N2wQ2MiNk9BRNZL7jo3peCAL1YPA&s";
        break;
      case "rain":
        this.imageUrl = "https://i.pinimg.com/736x/7f/53/0f/7f530f6e2583aa24c733232140dbbd55.jpg";
        break;
      case "snow":
        this.imageUrl = "https://cdn.vectorstock.com/i/500p/07/50/winter-snow-landscape-houses-snowflakes-falling-vector-33910750.jpg";
        break;
      case "thunderstorm":
        this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzi9jyVYeiDHqQfnKlEij19SU4qNryfY6KQ&s";
        break;
      case "tornado":
        this.imageUrl = "https://r2.erweima.ai/imgcompressed/compressed_ba6ef8dda27a0df4c99b92301f96f748.webp";
        break;
      default:
        this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJ-fAJy7scZ5O1H0sC02ZYuwJOv7994a1DQ&s";
    }
  }

}
