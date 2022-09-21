
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierCoursPageRoutingModule } from './modifier-cours-routing.module';

import { ModifierCoursPage } from './modifier-cours.page';
import { SaisieFormService } from '../saisie-cours/saisie-form.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModifierCoursPageRoutingModule
  ],
  declarations: [ModifierCoursPage],
  providers:[SaisieFormService]
})
export class ModifierCoursPageModule {}
