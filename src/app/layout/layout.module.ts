import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { RouterOutlet, RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShellComponent, TopBarComponent, MainContentComponent, CopyrightComponent],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [ShellComponent]
})
export class LayoutModule { }
