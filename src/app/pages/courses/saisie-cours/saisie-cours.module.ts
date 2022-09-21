import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaisieCoursPageRoutingModule } from './saisie-cours-routing.module';

import { SaisieCoursPage } from './saisie-cours.page';
import { SaisieFormService } from './saisie-form.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    IonicModule,
    SaisieCoursPageRoutingModule,
  ],
  declarations: [SaisieCoursPage],
  providers: [SaisieFormService],
})
export class SaisieCoursPageModule {}
