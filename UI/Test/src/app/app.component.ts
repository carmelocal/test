import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test';

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    var url = 'https://localhost:44320/WeatherForecast';

    this.http.get<any>(url).subscribe(res => {
      debugger
      var result = res;
    });
  }
}
