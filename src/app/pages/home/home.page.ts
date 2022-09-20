import { MenuStateService } from './../../core/services/menu-state.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  menuId = 'menu-first';
  promptEvent: any = null;
  constructor(private menuService: MenuStateService) {
    //  http://127.0.0.1:8080
    // ionic build --prod
    // http-server www (installer @angular/pwa)
    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('Event window');
      this.promptEvent = event;
    });
  }

  ngOnInit() {  }

  toggleMenu() {
    this.menuService.toggle();
  }
  onInstall() {
    this.promptEvent.prompt();
  }
}
