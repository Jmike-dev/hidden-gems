import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    MealInstance,
    RecipeInformationInsatance,
} from 'src/models/RecipeItems';
import { API_config } from 'src/env/API_config';

@Injectable({
    providedIn: 'root',
})
export class FoodsService {
    private apiSearchUrl = API_config.apiUrl;
    private apiKey = API_config.apiKey;

    constructor(private http: HttpClient) {}

    searchMeals(query: string): Observable<MealInstance> {
        let data = this.http.get<MealInstance>(
            `${this.apiSearchUrl}/recipes/complexSearch?apiKey=${this.apiKey}&query=${query}`
        );
        return data;
    }

    searchIngredients(
        RecipeID: Number
    ): Observable<RecipeInformationInsatance> {
        let ingredients = this.http.get<RecipeInformationInsatance>(
            `${this.apiSearchUrl}/recipes/${RecipeID}/information?apiKey=${this.apiKey}`
        );
        return ingredients;
    }
}
