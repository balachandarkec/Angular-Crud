import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'
})
export class CourseService {
 private baseUrl="http://localhost:3000/courses";
  

  constructor(private http:HttpClient) { }

  getAllCourses():Observable<any>{
    return this.http.get(this.baseUrl);
  }


  getCourseById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  createCourse(data:any):Observable<any>{
    return this.http.post(this.baseUrl,data);
  }
   

  updateCourse(id:number,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,data);
  }
 


  deleteCourseById(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


}
