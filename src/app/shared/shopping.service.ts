import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  constructor() { }
  ingredientListChanged = new EventEmitter<Ingredient[]>();

  private ingredientsList: Ingredient[] = [
    new Ingredient("apple", 1),
    new Ingredient("bread", 1)
  ];

  getIngredients() {
    return this.ingredientsList.slice();
  }

  addIngredient(...item: Ingredient[]) {
    this.ingredientsList.push(...item);
    this.ingredientListChanged.emit(this.ingredientsList.slice())
  }

  clearIngredientList() {
    this.ingredientsList = [];
    this.ingredientListChanged.emit(this.ingredientsList.slice())
  }
}
