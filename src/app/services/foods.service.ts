import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient) {}
  getRecipes():Observable<[]> {
    return this.http.get<[]>(`${this.apiUrl}`)
  }
}
