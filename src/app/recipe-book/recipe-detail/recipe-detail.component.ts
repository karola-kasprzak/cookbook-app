import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/shopping.service';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() displayRecipe: Recipe;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.shoppingService.addIngredient(...this.displayRecipe.ingredients)
  }
}
