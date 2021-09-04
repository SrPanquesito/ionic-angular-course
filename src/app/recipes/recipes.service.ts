import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  /*eslint max-len: ["error", { "code": 180 }]*/
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['Pork', 'Salad']
    },
    {
      id: '2',
      title: 'Spaguetti',
      imageUrl: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2019/05/Spaguetti-a-la-bolonesa-una-receta-de-pasta-para-triunfar.jpg',
      ingredients: ['Pasta', 'Meat']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId )
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }

}
