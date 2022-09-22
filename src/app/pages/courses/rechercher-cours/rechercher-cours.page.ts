import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { COURS, Cours } from 'src/app/core/models/cours';
import { ListService } from '../list-cours.service';

@Component({
  selector: 'app-rechercher-cours',
  templateUrl: './rechercher-cours.page.html',
  styleUrls: ['./rechercher-cours.page.scss'],
})
export class RechercherCoursPage implements OnInit {
  @ViewChild('input') input: IonSearchbar;
  list: Cours[];
  data: Cours[];
  COURS: typeof COURS = COURS;
  selected: string;
  constructor(public stockage: ListService) {}

  ngOnInit() {
    this.stockage.list.subscribe((data) => {
      this.data = data;
    });
    this.selected = COURS.NOM.toString();
  }
  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.list = this.data.filter(
      (d) => d[this.selected].toString().toLowerCase().indexOf(query) > -1
    );
  }
  handleChangePopover(value: any) {
    this.input
      .getInputElement()
      .then((input) => (input.value = ''));
    this.selected = value.target.value[0];
  }
}
