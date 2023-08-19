import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  newStudent: Student = new Student();
  constructor(private studentService: StudentService, private router: Router)
  {

  }
  createStudent(): void {
    this.newStudent.id = this.studentService.getNextId();
    this.studentService.createStudent(this.newStudent);
    this.router.navigate(['/students']);
  }
}
