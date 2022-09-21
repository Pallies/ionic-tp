import { Component, OnInit } from '@angular/core';
import { COURS, Cours } from 'src/app/core/models/cours';
import { ListService } from '../list-cours.service';

@Component({
  selector: 'app-rechercher-cours',
  templateUrl: './rechercher-cours.page.html',
  styleUrls: ['./rechercher-cours.page.scss'],
})
export class RechercherCoursPage implements OnInit {
  list: Cours[];
  data: Cours[];
  COURS: typeof COURS = COURS;
  selected = [COURS.NOM];
  constructor(public stockage: ListService) {}

  ngOnInit() {
    this.stockage.list.subscribe((data) => {
      this.data = data;
    });
  }
  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.list = this.data.filter(
      (d) => d[`${this.selected}`].toLowerCase().indexOf(query) > -1
    );
  }
  handleChangePopover(value: any) {
    this.selected = value.target.value[0];
  }
}
