import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
url:string="http://localhost:3000/Student/"

e:Student={
  id:0,
  name:"",
  uname:"",
  password:"",
  address:""
}
  constructor(public httpclient:HttpClient) {
      
   }

   getData():Observable<Student[]>{
   
   return this.httpclient.get<Student[]>(this.url)

   } 
   deleteData(id:number)
   {
     return this.httpclient.delete(this.url+id)
   }

   postData(stu:Student) 
   {
     console.log(stu.name)
     console.log(stu.id)
     alert("postData")
     return this.httpclient.post(this.url,stu)
   }
   updateData(stu:Student):Observable<Student>
   {
     alert("Data  updateData")
     return this.httpclient.put<Student>(this.url+stu.id,stu)
   }

   
}
