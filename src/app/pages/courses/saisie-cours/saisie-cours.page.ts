import { ListService } from '../list-cours.service';
import { Router } from '@angular/router';
import { COURS } from '../../../core/models/cours';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SaisieFormService } from './saisie-form.service';

@Component({
  selector: 'app-saisie-cours',
  templateUrl: './saisie-cours.page.html',
  styleUrls: ['./saisie-cours.page.scss'],
})
export class SaisieCoursPage implements OnInit {
  form: FormGroup;
  COURS: typeof COURS = COURS;
  constructor(
    private saisieService: SaisieFormService,
    private route: Router,
    private listService: ListService
  ) {
    this.form = this.saisieService.form;
  }
  get nomControl() {
    return this.form.get([COURS.NOM]);
  }
  get profControl() {
    return this.form.get([COURS.PROF]);
  }
  get nbControl() {
    return this.form.get([COURS.NOMBRE]);
  }
  get isRequired(): boolean {
    return (
      (this.nbControl.invalid && this.nbControl.touched) ||
      (this.nomControl.invalid && this.nomControl.touched) ||
      (this.profControl.invalid && this.profControl.touched)
    );
  }
  ngOnInit() {}

  onSubmit() {
    this.listService.add(this.form.value);
    this.route.navigate(['liste-cours']);
  }
}
