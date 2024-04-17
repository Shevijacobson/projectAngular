import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import Validation from '../../Models/validation';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';
import { Teacher } from '../../Models/Teacher';
import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { Course } from '../../Models/Course';
import { CoursesService } from '../../Services/Courses/courses.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDividerModule, MatIconModule, MatButtonModule, MatInputModule, MatFormField, MatSelectModule, MatFormFieldModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss'
})
export class AddTeacherComponent {
  someMethod(arg0: any) {
    console.log(arg0);
  }
  foo(arg0: boolean) {

  }
  form: FormGroup = new FormGroup({});

  submitted = false;
  courses = new FormControl('');
  coursesList: Course[] = [];

  constructor(private funTeacher: FunTecherService, private funCourses: FunCourseService) {
    this.coursesList = funCourses.getAllCourses();
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        id: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9),]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(40),
          ]),
        confirmPassword: new FormControl('', [Validators.required]),
        nameCourse: new FormControl('', [Validators.required]),
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;


    if (this.form.invalid) {
      return;
    }
    let newTeacher: Teacher = {
      Id: this.form.value.id,
      FirstName: this.form.value.firstName,
      LastName: this.form.value.lastName,
      Password: this.form.value.password,
      Access: 1
    }
    let newCourse: Course = {
      Id: "",
      Name: this.form.value.nameCourse,
      NumLessons: 0,
      IdTeacher: this.form.value.id,
      IdStudent: ""
    }
    if (this.funTeacher.AddTeacher(newTeacher) == 200) {

      if (this.funCourses.addCourse(newCourse) == 200) {
        Swal.fire({
          text: 'המשתמש נוסף בהצלחה',
          icon: 'success',
          confirmButtonText: 'אישור'
        });
        this.onReset();
        console.log(this.form.value);
      }
      else {
        Swal.fire({
          text: 'קורס זה כבר קיים במערכת',
          icon: 'error',
          confirmButtonText: 'אישור'
        });
        return;
      }
    }

    else
      Swal.fire({
        text: 'ת.ז. זו כבר קיימת במערכת',
        icon: 'error',
        confirmButtonText: 'אישור'
      });

  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
