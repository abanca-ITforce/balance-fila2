import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { LayoutModule as MaterialLayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [ShellComponent, TopBarComponent, MainContentComponent, CopyrightComponent, NavShellComponent],
  imports: [
    CommonModule, RouterModule, MaterialLayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  ],
  exports: [NavShellComponent]
})
export class LayoutModule { }
