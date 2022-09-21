import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { COURS, Cours } from 'src/app/core/models/cours';

@Injectable({
  providedIn: 'root',
})
export class SaisieFormService {
  _form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this._form = this.formBuilder.group({
      [COURS.NOM]: this.formBuilder.control('', Validators.required),
      [COURS.NOMBRE]: this.formBuilder.control('', Validators.required),
      [COURS.PROF]: this.formBuilder.control('', Validators.required),
      [COURS.DATE]: this.formBuilder.control(''),
    });
  }
  get form(): FormGroup {
    return this._form;
  }
}
