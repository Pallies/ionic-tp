import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorDirective } from './selector.directive';



@NgModule({
  declarations: [SelectorDirective, ],
  imports: [
    CommonModule
  ],exports:[SelectorDirective,]
})
export class DirectiveModule { }
