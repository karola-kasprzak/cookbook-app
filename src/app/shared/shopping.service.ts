import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  constructor() { }
  ingredientListChanged = new Subject<Ingredient[]>();

  private ingredientsList: Ingredient[] = [
    new Ingredient("apple", 1),
    new Ingredient("bread", 1)
  ];

  getIngredients() {
    return this.ingredientsList.slice();
  }

  addIngredient(...item: Ingredient[]) {
    this.ingredientsList.push(...item);
    this.ingredientListChanged.next(this.ingredientsList.slice())
  }

  clearIngredientList() {
    this.ingredientsList = [];
    this.ingredientListChanged.next(this.ingredientsList.slice())
  }
}
