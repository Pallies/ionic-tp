import { Component, Input, OnInit } from '@angular/core';
import { COURS, Cours } from 'src/app/core/models/cours';

@Component({
  selector: 'app-item-cours',
  templateUrl: './item-cours.component.html',
  styleUrls: ['./item-cours.component.scss'],
})
export class ItemCoursComponent implements OnInit {
  @Input() cours!: Cours;
  COURS: typeof COURS=COURS;
  constructor() {}

  ngOnInit() {}
}
