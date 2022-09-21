import { ListService } from '../list-cours.service';
import { Component, OnInit } from '@angular/core';
import { COURS } from 'src/app/core/models/cours';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.page.html',
  styleUrls: ['./liste-cours.page.scss'],
})
export class ListeCoursPage implements OnInit {
  COURS: typeof COURS = COURS;
  constructor(public stockage: ListService,private route: Router) {}

  ngOnInit() {}

  onUpdate(index: number) {
    this.route.navigate(['saisie-cours',`${index}`]);
  }
  onRemove(index: number) {
    this.stockage.remove(index);
  }
}
