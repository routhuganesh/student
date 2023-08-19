import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  // students: Student[] = [];
  // student: Student = new Student();
  student: Student | undefined;
  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute)
  {

  }
  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId !== null) {
      const parsedId = +studentId;
      this.student = this.studentService.getStudent(parsedId);
    } else {
      console.error('Invalid student ID');
    }
  }

  updateStudent(): void {
    if(this.student)
    {
    this.studentService.updateStudent(this.student);
    this.router.navigate(['/students']);
    }
  }
 

}
