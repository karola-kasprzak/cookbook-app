import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }
  recipes: Recipe[];

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
