import { ICourses } from './../../core/models/courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  courses: ICourses[] = [{ nom: 'nom', nb: 5 }];

  constructor() {}

  ngOnInit() {
    console.log('cycle de vie IONIC CREATION COMPONENT');
  }
  ionViewWillEnter(){
    console.log('cycle de vie IONIC REVENIR A LA PAGE');
  }
}
