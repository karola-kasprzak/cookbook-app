import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredients = new EventEmitter<{}[]>();

  constructor() { }
  ingredientName: string;
  ingredientAmount: number;
  ingredientList: Ingredient[] = [];

  ngOnInit(): void {
  }

  updateIngredients() {
    this.ingredients.emit(this.ingredientList);
    console.log(this.ingredientList)
  }

  onAddIngredient() {
    if (this.ingredientAmount && this.ingredientName) { 
      this.ingredientList.push(new Ingredient(this.ingredientName, this.ingredientAmount))
     }
     this.ingredientName = null;
     this.ingredientAmount = null;
     this.updateIngredients();
  }

  onClearIngredients() {
    this.ingredientList = [];
    this.updateIngredients()
  }

  onDeleteLast() {
    this.ingredientList = this.ingredientList.slice(0, this.ingredientList.length-1);
    this.updateIngredients()
  }
}
