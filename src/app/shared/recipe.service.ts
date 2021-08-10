import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-book/recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Pizza 1","Recipe for a delicious pizza", "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg"),
    new Recipe("Pizza 2","Recipe for a delicious pizza", "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg"),
    new Recipe("Pizza 3","Recipe for a delicious pizza", "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg")]


  getRecipes() {
    return this.recipes.slice()
  }


  constructor() { }

}
