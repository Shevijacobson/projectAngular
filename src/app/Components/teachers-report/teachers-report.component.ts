import { Component } from '@angular/core';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';

@Component({
  selector: 'app-teachers-report',
  standalone: true,
  imports: [],
  templateUrl: './teachers-report.component.html',
  styleUrl: './teachers-report.component.scss'
})
export class TeachersReportComponent {
  constructor(private funTeacher:FunTecherService){
   funTeacher.GetAllTeachersWithTheirCourses() 
  }


}
