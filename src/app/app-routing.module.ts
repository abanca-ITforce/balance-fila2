import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ShellComponent } from './layout/shell/shell.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shell', component: ShellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
