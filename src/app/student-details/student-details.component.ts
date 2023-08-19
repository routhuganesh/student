import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student: Student | undefined;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const studentId = +this.route.snapshot.paramMap.get('id');
    // this.student = this.studentService.getStudent(studentId);

    // if (!this.student) {
    //   console.error('Student not found');
    // }
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId !== null) {
      const parsedId = +studentId;
      this.student = this.studentService.getStudent(parsedId);

      if (!this.student) {
        console.error('Student not found');
      }
    } else {
      console.error('Invalid student ID');
    }
    
  }

}
