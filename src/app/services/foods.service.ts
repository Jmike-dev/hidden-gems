import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';
  apiKey = '61c44b1fb7e54cc380860385c02a6d6e';
  constructor( ) {}
}
