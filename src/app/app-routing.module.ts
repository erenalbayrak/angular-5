import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {PostsComponent} from "./components/posts/posts.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UserComponent },
  { path: "posts", component: PostsComponent },
];

@NgModule({
  exports: [RouterModule], // diese Zeile musste man manuell eintragen.
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
