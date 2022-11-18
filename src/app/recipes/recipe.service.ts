import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'this is simple a test',
      'https://upload.wikimedia.org/wikipedia/commons/d/d1/D%C3%B6ner_kebap_in_Ankara.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries',20)]),
    new Recipe('Shoarma',
      'Nice meat with bread and souce',
      'https://shaormeriabaneasa.ro/wp-content/uploads/detaliu-shaorma-la-farfurie-cu-vita%CC%86.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Buns',20)])];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes()  {
    // returns a copy not the real reference
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }
}
