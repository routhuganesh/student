import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  student: Student | undefined;

  constructor() { }

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudent(id: number): Student|undefined {
    return this.students.find(x => x.id == id);
  }

  createStudent(student: Student): void {
    this.students.push(student);
  }

  updateStudent(updateStudent: Student): void {
    const index = this.students.findIndex(x => x.id == updateStudent.id);
    if(index !== -1)
    {
      this.students[index] = updateStudent;
    }
  }
  deleteStudent(id: number): void {
    this.students = this.students.filter(x => x.id !== id);
  }

   getNextId(): number {
    const existingIds = this.students.map((student) => student.id);
    const maxId = existingIds.length>0 ? Math.max(...existingIds): 0;
    return maxId+1;
  }
}
