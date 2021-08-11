import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-book/recipe-list/recipe.model';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Simple pizza",
      "Recipe for a delicious pizza", 
      "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg",
      [new Ingredient("pizza dough", 1),
      new Ingredient("tomato sauce", 1),
      ]),
    new Recipe(
      "Pancakes",
      "Make some pancakes!",
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg",
      [new Ingredient("milk", 1),
        new Ingredient("flour", 2),
        new Ingredient("egg", 2)]),
      ]

  getRecipes() {
    return this.recipes.slice()
  }


  constructor() { }

}
