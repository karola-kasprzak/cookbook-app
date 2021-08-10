import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredientsList: Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredientsList = this.shoppingService.getIngredients();
    this.shoppingService.ingredientListChanged.subscribe((ingredients: Ingredient[]) => this.ingredientsList = ingredients)
  }

}
