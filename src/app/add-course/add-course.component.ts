import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course={
    "id":Math.random(),
    "title":''
   
  };
  submitted=false;


  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
  }


  saveCourse():void{
    const data={
      "id":this.course.id,
      "title":this.course.title
    };

    this.courseService.createCourse(data).subscribe(
      response=>{
        console.log(response);
        this.submitted=true;
      },
      error=>{
        console.log(error);
        this.submitted=false;
      }
    );
  }


  newCourse():void{
    this.submitted=false;
    this.course={
      "id":Math.random(),
      "title":''
     
    };

  }

}
