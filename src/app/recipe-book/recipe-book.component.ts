import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit, OnDestroy {
  recipeToDisplay: Recipe;
  recipeSub: Subscription;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeSub = this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.recipeToDisplay = recipe
    )
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe()
  }
}
