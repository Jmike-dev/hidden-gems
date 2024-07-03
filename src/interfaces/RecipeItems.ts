export interface RecipeInstance {
    id: number;
    title: string;
    image: string;
    imageType: string;
}
export interface MealInstance {
    results: RecipeInstance[];
    offset: number;
    number: number;
    totalResults: number;
}

export interface IngredientsInstance {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: [];
    measures: {};
}
export interface RecipeInformationInsatance {
    vegetarian: boolean;
    vegan: boolean;
    glutenfree: boolean;
    dairyfree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowfowmap: boolean;
    weightWatcherSmartPoints: number;
    gap: string;
    preparationMinutes: null;
    cookingMinutes: null;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: IngredientsInstance[];
    id: number;
    title: string;
    readyInMinutes: number;
    serving: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: [];
    dishTypes: [];
    diets: [];
    occassions: [];
    instructions: string;
    analyzedInstructions: [];
    originalId: null;
    spoonacularScore: number;
    spoonacularSourceUrl: string;
}
