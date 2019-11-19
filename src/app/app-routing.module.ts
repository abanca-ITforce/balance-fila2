import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MainContentComponent } from './layout/main-content/main-content.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'main-content', component: MainContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
