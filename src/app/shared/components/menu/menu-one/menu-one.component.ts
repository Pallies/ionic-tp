import { PopoverService } from './../../../../core/services/popover.service';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.component.html',
  styleUrls: ['./menu-one.component.scss'],
})
export class MenuOneComponent implements OnInit {
  constructor(private menu: MenuController, private popover: PopoverService,    private route: Router) {}

  ngOnInit() {}

  onDimiss() {
    this.menu.close();
  }
  openMenu(event: any) {
    this.popover.create(event, 'ios');
  }
  navigate(route: string){
    this.route.navigate([`/${route}`]);
    this.onDimiss();
  }
}
