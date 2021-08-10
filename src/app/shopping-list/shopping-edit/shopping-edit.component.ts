import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }
  ingredientName: string;
  ingredientAmount: number;
  ingredientList: Ingredient[];

  ngOnInit(): void {
  }

  onAddIngredient() {
    if (this.ingredientAmount && this.ingredientName) { 
      const ingredient = new Ingredient(this.ingredientName, this.ingredientAmount);
      this.shoppingService.addIngredient(ingredient)
     }
     this.ingredientName = null;
     this.ingredientAmount = null;
  }

  onClearIngredients() {
    this.shoppingService.clearIngredientList();
  }

  onDeleteLast() {
  }
}
