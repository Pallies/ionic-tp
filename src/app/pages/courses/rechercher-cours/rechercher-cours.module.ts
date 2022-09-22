import { DirectiveModule } from 'src/app/shared/directives/directive.module';
import { ItemsModule } from './../../../shared/components/items/items.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercherCoursPageRoutingModule } from './rechercher-cours-routing.module';

import { RechercherCoursPage } from './rechercher-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsModule,
    DirectiveModule,
    RechercherCoursPageRoutingModule
  ],
  declarations: [RechercherCoursPage]
})
export class RechercherCoursPageModule {}
