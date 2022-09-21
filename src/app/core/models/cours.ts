export enum COURS {
  NOM = 'nom',
  NOMBRE = 'nbEtudiant',
  PROF = 'nomProf',
  DATE = 'date',
}
export interface ICours {
  [COURS.NOM]: string;
  [COURS.NOMBRE]: number;
  [COURS.PROF]: string;
  [COURS.DATE]: string;
}
export class Cours implements ICours {
  [COURS.NOM]: string;
  [COURS.NOMBRE]: number;
  [COURS.PROF]: string;
  [COURS.DATE]: string;

  constructor(cours: Cours) {
    this[COURS.NOM] = cours[COURS.NOM];
    this[COURS.NOMBRE] = cours[COURS.NOMBRE];
    this[COURS.PROF] = cours[COURS.PROF] || 'Remplaçant';
    this[COURS.DATE] = this._formatTodate();
  }

  private _formatTodate(): string {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = date.getMonth().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
  }
}
