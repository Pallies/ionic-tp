import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCoursPageRoutingModule } from './liste-cours-routing.module';

import { ListeCoursPage } from './liste-cours.page';
import { ItemsModule } from 'src/app/shared/components/items/items.module';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCoursPageRoutingModule,
    ItemsModule,
    DirectiveModule,
  ],
  declarations: [ListeCoursPage],
})
export class ListeCoursPageModule {}
