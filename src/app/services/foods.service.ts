import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseInstance } from 'src/interfaces/MenuItems';
import { API_config } from 'src/env/API_config';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private apiSearchUrl = API_config.apiUrl;
  private apiKey = API_config.apiKey;

  constructor(private http: HttpClient) {}


  searchMeals(query: string): Observable<ResponseInstance>{
    let data = this.http.get<ResponseInstance>(
      `${this.apiSearchUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${query}`,
    );
    return data
  }
}
