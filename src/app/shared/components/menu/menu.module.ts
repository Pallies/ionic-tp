import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';
import { MenuActionComponent } from './menu-action/menu-action.component';



@NgModule({
  declarations: [MenuOneComponent,MenuTwoComponent,MenuActionComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[MenuOneComponent,MenuTwoComponent,MenuActionComponent]
})
export class MenuModule { }
