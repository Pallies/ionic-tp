import { SelectorDirective } from './../../../shared/directives/selector.directive';
import { ListService } from '../list-cours.service';
import { Component, OnInit, Directive } from '@angular/core';
import { COURS } from 'src/app/core/models/cours';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.page.html',
  styleUrls: ['./liste-cours.page.scss'],
})
export class ListeCoursPage implements OnInit {
  COURS: typeof COURS = COURS;
  selectedValue: string;
  beforeValue: string;
  constructor(public stockage: ListService, private route: Router) {}

  ngOnInit() {}
  handleSort(e: any) {
    if (this.beforeValue === e) {
      this.stockage.reverse();
    } else {
      this.stockage.sort(e);
    }
    this.beforeValue=e;
  }
  onUpdate(index: number) {
    this.route.navigate(['saisie-cours', `${index}`]);
  }
  onRemove(index: number) {
    this.stockage.remove(index);
  }
}
