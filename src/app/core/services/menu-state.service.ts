import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  currentState!: Observable<string>;
  _state: Subject<string>;
  _menuActived = 'menu-second';

  constructor(private menu: MenuController) {}

  get menuActived(): string {
    return this._menuActived;
  }

  toggle() {
    this._menuActived =
      this._menuActived === 'menu-first' ? 'menu-second' : 'menu-first';
    this.menu.enable(true, this._menuActived);
  }
}
