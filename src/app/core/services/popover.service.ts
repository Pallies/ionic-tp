import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuActionComponent } from 'src/app/shared/components/menu/menu-action/menu-action.component';
import { Alert } from '../models/alert';
import { UpperCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PopoverService {
  constructor(
    private popover: PopoverController,
    private alert: AlertService
  ) {}

  create(event: MouseEvent, name: string) {
    console.log(event);
    this.popover
      .create({
        component: MenuActionComponent,
        showBackdrop: true,
        animated: true,
        cssClass: `#label{padding:4px 0;color:crimson;}`,
        event,
        componentProps: {
          props: name,
        },
      })
      .then((popoverElement: HTMLIonPopoverElement) => {
        popoverElement.present();
        popoverElement.onDidDismiss().then((res) => {
          this.alert.openAlert(
            new Alert(
              ` Question ?`,
              `
              <div>
              <ion-icon name="information-circle-outline" slot="start" color="primary"></ion-icon>
              Vous avez sélectionné :<br>
          <span style="{color:crimson}">l'item ${res.data} d' ${name.toUpperCase()}</span> <br>
          voulez-vous continuer ?</div>`,
              2
            )
          );
        });
      });
  }
}
