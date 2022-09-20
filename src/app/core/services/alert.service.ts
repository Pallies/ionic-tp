import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IAlert } from '../models/alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alert: AlertController) {}

  public async openAlert(alertOption: IAlert) {

    const alertElement = await this.alert.create({
      ...alertOption,
     translucent:true
    });
    alertElement.present();
    // alertElement.onDidDismiss().then(); action à la fermeture !?
  }
}
