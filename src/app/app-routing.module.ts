import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RouterModule, Routes} from "@angular/router";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: '/recipes'
}, {
  path: 'recipes', component: RecipesComponent , children:[
    {
    path: '', component: RecipeStartComponent},{
    path:'new', component: RecipeEditComponent},{
    path: ':id', component: RecipeDetailComponent},{
    path:':id/edit', component: RecipeEditComponent
    }
  ]
}, {
  path: 'shoppings', component: ShoppingListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], exports: [RouterModule]
})
export class AppRoutingModule {

}
