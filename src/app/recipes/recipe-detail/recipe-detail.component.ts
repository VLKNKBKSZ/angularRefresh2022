import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id:number;
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute)
  { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe((param:Params)=> {
      this.id= +param['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    })
  }

  onToShopppingList() {
   this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
