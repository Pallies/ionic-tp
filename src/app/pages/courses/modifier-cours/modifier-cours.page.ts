import { FormGroup } from '@angular/forms';
import { ListService } from './../list-cours.service';
import { Component, OnInit } from '@angular/core';
import { SaisieFormService } from '../saisie-cours/saisie-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { COURS } from 'src/app/core/models/cours';

@Component({
  selector: 'app-modifier-cours',
  templateUrl: './modifier-cours.page.html',
  styleUrls: ['./modifier-cours.page.scss'],
})
export class ModifierCoursPage implements OnInit {
  form: FormGroup;
  COURS: typeof COURS = COURS;
  index: number;
  constructor(
    private stockage: ListService,
    private saisieService: SaisieFormService,
    private routeActived: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.form = this.saisieService.form;
    this.routeActived.paramMap.subscribe((params) => {
      this.index = +params.get('id');
      const list = this.stockage.list.getValue();
      this.form.setValue(list[this.index]);
    });
  }
  onUpdated() {
    this.stockage.update(this.form.value, this.index);
    this.route.navigate(['liste-cours']);
  }
}
