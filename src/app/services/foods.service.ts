import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/environment';
import { Observable } from 'rxjs';
import { ResponseInstance } from 'src/interfaces/MenuItems';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private apiSearchUrl = enviroment.apiUrl;
  private apiKey = enviroment.apiKey;

  constructor(private http: HttpClient) {}


  searchMeals(query: string): Observable<ResponseInstance>{
    let data = this.http.get<ResponseInstance>(
      `${this.apiSearchUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${query}`,
    );
    return data
  }
}
