import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Cours } from 'src/app/core/models/cours';
import { Preferences } from '@capacitor/preferences';

import * as coursData from './mock-cours.json';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  list: BehaviorSubject<Cours[]> = new BehaviorSubject([]);

  constructor() {
    // chargement des données JSON ou storage
    this.loadStorageasync().then((data) => {
      if (data !== null) {
        this.list.next(data);
      } else {
        this.list.next(coursData?.cours as Cours[]);
        this.saveStorageasync(this.list.getValue());
      }
    });
  }
  add(cours: Cours) {
    const list = this.list.getValue();
    list.unshift(new Cours(cours));
    this.list.next(list);
    this.saveStorageasync();
  }
  update(cours: Cours, index) {
    const list = this.list.getValue();
    list.splice(index, 1);
    const startList = list.slice(0, index);
    const endList = list.slice(index);
    startList.push(new Cours(cours));
    this.list.next(startList.concat(endList));
    this.saveStorageasync();
  }
  sort(nameProp: string) {
    this.list
      .getValue()
      .sort((a: Cours, b: Cours) => b[nameProp].localeCompare(a[nameProp]))
      .reverse();
  }
  reverse() {
    this.list.getValue().reverse();
  }

  remove(index: number) {
    this.list.getValue().splice(index, 1);
    this.saveStorageasync();
  }
  // gestion du stockage
  async saveStorageasync(data: Cours[]=this.list.getValue()) {
    await Preferences.set({
      key: 'cours',
      value: JSON.stringify(data),
    });
  }
  async loadStorageasync(): Promise<Cours[]> {
    const { value } = await Preferences.get({ key: 'cours' });
    return JSON.parse(value);
  }
}
