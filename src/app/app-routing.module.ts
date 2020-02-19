import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReaderComponent } from "./components/reader/reader.component";
import { StarredComponent } from "./components/starred/starred.component";
import { CategoryComponent } from "./components/category/category.component";

const routes: Routes = [
  { path: "", component: ReaderComponent },
  { path: "starred", component: StarredComponent },
  {
    path: "category",
    component: CategoryComponent,
    children: [
      { path: "business", component: CategoryComponent },
      { path: "entertainment", component: CategoryComponent },
      { path: "health", component: CategoryComponent },
      { path: "science", component: CategoryComponent },
      { path: "sports", component: CategoryComponent },
      { path: "technology", component: CategoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
