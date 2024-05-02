import { Routes } from '@angular/router';
import { CurrentLessonComponent } from './Components/current-lesson/current-lesson.component';
import { TeacherMainPageComponent } from './Components/teacher-main-page/teacher-main-page.component';
import { LoginComponent } from '../app/Components/login/login.component'
import { HomePageManagerComponent } from './Components/home-page-manager/home-page-manager.component';
import { CurrentCourseComponent } from './Components/current-course/current-course.component';
import { CourseReportComponent } from './Components/course-report/course-report.component';
import { StudentReportComponent } from './Components/student-report/student-report.component';
import { DisplayCoursesByUserComponent } from './Components/display-courses-by-user/display-courses-by-user.component';
import { TeachersReportComponent } from './Components/teachers-report/teachers-report.component';
import { AddTeacherComponent } from './Components/add-teacher/add-teacher.component';


export const routes: Routes = [
    { path: 'Home', component: LoginComponent },
    { path: 'idCourse/:idCourse/currentLesson/:numberIdLesson', component: CurrentLessonComponent },
    { path: 'HomePageTeacher', component: TeacherMainPageComponent },
    {
        path: 'HomePageManager', component: HomePageManagerComponent, children: [
            { path: 'managerAllCourses', component: DisplayCoursesByUserComponent },
            { path: 'CurrentCourse/:courseId', component: CurrentCourseComponent },
            { path: 'teachersReport', component: TeachersReportComponent },
            { path: 'addTeacher', component: AddTeacherComponent },
            { path: 'editTeacher', component: AddTeacherComponent },
        ]
    },
    { path: 'DisplayCourse/CurrentCourse/:courseId', component: CurrentCourseComponent },
    { path: 'HomePageStudent', component: DisplayCoursesByUserComponent },
    { path: "report/courseId/:idCourse", component: CourseReportComponent },
    { path: "report/courseId/:idCourse/studentId/:idStudent", component: StudentReportComponent },
    { path: "studentReport", component: StudentReportComponent },

    

];
