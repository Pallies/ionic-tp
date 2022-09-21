import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Cours } from 'src/app/core/models/cours';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  list: BehaviorSubject<Cours[]> = new BehaviorSubject([]);

  constructor() {
    this.add(new Cours({ nom: 'Angular', nbEtudiant: 25, nomProf:'Romain'} as Cours));
    this.add(new Cours({ nom: 'Bootstrap', nbEtudiant: 25 , nomProf:'Clara'} as Cours));
    this.add(new Cours({ nom: 'Spring Boot', nbEtudiant: 15 , nomProf:'Séga'} as Cours));
    this.add(new Cours({ nom: 'Docker', nbEtudiant: 5 , nomProf:'Jonathan'} as Cours));
    this.add(new Cours({ nom: 'Material', nbEtudiant: 15 , nomProf:'Théo'} as Cours));
    this.add(new Cours({ nom: 'Hybernate', nbEtudiant: 25 , nomProf:'Rossi'} as Cours));
    this.add(new Cours({ nom: 'ionic', nbEtudiant: 25, nomProf:'Christophe' } as Cours));
    this.add(new Cours({ nom: 'Capacitor', nbEtudiant: 10 , nomProf:'Noé'} as Cours));
    this.add(new Cours({ nom: 'Java', nbEtudiant: 25 , nomProf:'Richard'} as Cours));
    this.add(new Cours({ nom: 'React', nbEtudiant: 10, nomProf:'Benjamin' } as Cours));
  }
  add(cours: Cours) {
    const list = this.list.getValue();
    list.unshift(new Cours(cours));
    // list.unshift(cours);
    this.list.next(list);
  }
  update(cours: Cours, index) {
    const list = this.list.getValue();
    list.splice(index, 1);
    const startList = list.slice(0, index);
    const endList = list.slice(index);
    startList.push(new Cours(cours));
    this.list.next(startList.concat(endList));
    console.log(this.list.getValue());
  }
  sort(nameProp: string){
   const list = this.list.getValue().sort((a,b)=>a[nameProp]-b[nameProp]);
    this.list.next(list);
  }
  reverse(){
    this.list.next(this.list.getValue().reverse());
  }

  remove(index: number) {
    this.list.getValue().splice(index, 1);
  }
}
