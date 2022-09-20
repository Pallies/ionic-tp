import { PopoverService } from './../../../../core/services/popover.service';
import { MenuController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.scss'],
})
export class MenuTwoComponent implements OnInit {
  constructor(
    private menu: MenuController,
    private popover: PopoverService,
    private route: Router
  ) {}

  ngOnInit() {}

  onDimiss() {
    this.menu.close();
  }
  openMenu(event: any) {
    this.popover.create(event, 'android');
  }
  navigate(route: string){
    this.route.navigate([`${route}`]);
    this.onDimiss();
  }
}
