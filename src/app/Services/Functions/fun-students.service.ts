import { Injectable, numberAttribute } from '@angular/core';
import { StudentsService } from '../Students/students.service';
import { CoursesService } from '../Courses/courses.service';
import { Course } from '../../Models/Course';
import { UserService } from '../user/user.service';
import { LessonsService } from '../Lessons/lessons.service';
import { Student } from '../../Models/Student';

@Injectable({
  providedIn: 'root'
})
export class FunStudentsService {

  constructor(public courses: CoursesService, public studentsArr: StudentsService, public userGlobal: UserService, public arrLessons: LessonsService) { }
  //פונקציה שמקבלת וד של קורס ומחזירה מערך מסוג קורסים של כל התלמידים שבקורס
  getStudentsOfCoure(idCours: string) {
    let arrStudentsOfCourse = []
    for (let i = 0; i < this.courses.arrCourses.length; i++) {
      if (idCours == this.courses.arrCourses[i].Id)
        arrStudentsOfCourse.push(this.courses.arrCourses[i])
    }
    return arrStudentsOfCourse;
  }

  getUser(userName: string, password: string) {

    for (let i = 0; i < this.studentsArr.students.length; i++) {
      if (this.studentsArr.students[i].Id == userName && this.studentsArr.students[i].Password == password) {
        this.userGlobal.user = this.studentsArr.students[i]
        return true
      }
    }
    return false;
  }

  //פונקציה שמקבלת תלמיד וקורס ומחזירה כמה שיעורים הקשיב
  CountLessonStudentListen(idCourse: string, id_Student: string) {
    let countLesson = 0;
    for (let i = 0; i < this.arrLessons.arrLesson.length; i++) {
      if (this.arrLessons.arrLesson[i].IdStudent == id_Student && this.arrLessons.arrLesson[i].IdCourse == idCourse) {
        if (this.arrLessons.arrLesson[i].isExecution == true)
          countLesson = countLesson + 1;
      }
    }
    return countLesson;
  }

  //פונקציה שמקבלת תלמיד וקורס ומחזירה כה שיעורים יש לתלמיד בקורס הרצוי
  CountLessonInCourse(idCourse: string, id_Student: string) {
    let countLesson = 0;
    for (let i = 0; i < this.arrLessons.arrLesson.length; i++) {
      if (this.arrLessons.arrLesson[i].IdStudent == id_Student && this.arrLessons.arrLesson[i].IdCourse == idCourse) {
        {
          // console.log(this.arrLessons.arrLesson[i].exe)
          countLesson = countLesson + 1;
        }
      }
    }
    return countLesson;
  }

 

  //פונקציה שמקבלת מערך של ת.ז. ומחזירה מערך של תלמידים בהתאם לת.ז.
  GetStudentsById(studentId: string[]) {
    let arrStudents: Student[];
    arrStudents = [];
    let index = 0;
    for (let i = 0; i < studentId.length; i++)
      for (let j = 0; j < this.studentsArr.students.length; j++) {
        if (this.studentsArr.students[j].Id == studentId[i])
          arrStudents[index++] = this.studentsArr.students[j];
      }
      console.log(arrStudents);
    return arrStudents;
  }









}
