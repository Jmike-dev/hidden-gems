import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/environment';
import { Observable } from 'rxjs';
import { MenuItemInstance } from 'src/interfaces/MenuItems';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private apiSearchUrl = enviroment.apiUrl;
  private apiKey = enviroment.apiKey;

  constructor(private http: HttpClient) {}

  searchMeals(query: string): Observable<MenuItemInstance[]> {
    return this.http.get<MenuItemInstance[]>(
      `${this.apiSearchUrl}?apiKey=${this.apiKey}&query=${query}`,
    );
  }
}
