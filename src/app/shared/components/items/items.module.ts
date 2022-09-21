import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSlidingComponent } from './item-sliding/item-sliding.component';
import { IonicModule } from '@ionic/angular';
import { ItemCoursComponent } from './item-cours/item-cours.component';



@NgModule({
  declarations: [ItemSlidingComponent,ItemCoursComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[ItemSlidingComponent,ItemCoursComponent]
})
export class ItemsModule { }
