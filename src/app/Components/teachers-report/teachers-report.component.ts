import { Component } from '@angular/core';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../Models/Teacher';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teachers-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teachers-report.component.html',
  styleUrl: './teachers-report.component.scss'
})

export class TeachersReportComponent {

  teachers: any[] = [];

  constructor(private funTeacher: FunTecherService, private router: ActivatedRoute, private route: Router) {
    this.teachers = funTeacher.GetAllTeachersWithTheirCourses()
  }

  navigateToEditTeacher(teacher: any) {
    this.route.navigate(['HomePageManager/editTeacher'], { state: { teacherToEdit: teacher } })
  }


}
