import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './commponents/sideMenu/sideMenu.component';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
