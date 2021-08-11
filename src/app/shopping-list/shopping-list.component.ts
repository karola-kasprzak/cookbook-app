import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingSub: Subscription;
  ingredientsList: Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredientsList = this.shoppingService.getIngredients();
    this.shoppingSub = this.shoppingService.ingredientListChanged.subscribe((ingredients: Ingredient[]) => this.ingredientsList = ingredients)
  }

  ngOnDestroy() {
    this.shoppingSub.unsubscribe()
  }
}
