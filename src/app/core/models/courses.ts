export interface ICourses {
  nom: string;
  nb: number;
}
export class Courses implements ICourses {
  constructor(public nom: string, public nb: number) {}
}
