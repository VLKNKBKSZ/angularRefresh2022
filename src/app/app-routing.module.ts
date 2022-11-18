import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: '/recipes'
}, {
  path: 'recipes', component: RecipesComponent
}, {
  path: 'shoppings', component: ShoppingListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], exports: [RouterModule]
})
export class AppRoutingModule {

}
