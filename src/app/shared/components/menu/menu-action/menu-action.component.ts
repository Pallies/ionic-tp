import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu-action',
  templateUrl: './menu-action.component.html',
  styleUrls: ['./menu-action.component.scss'],
})
export class MenuActionComponent implements OnInit {
  props!: string;
  list = [1, 2, 3, 4];
  constructor(private popover: PopoverController) {}
  ngOnInit() {}

  // renvoie l'item sélectionné {data,role}
  closePopover(item): void {
    this.popover.dismiss(item);
  }
}
