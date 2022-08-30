import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(public commonservice:CommonService) { }

  ngOnInit(): void {
  }

  submit(stu:Student)
  {
    alert("submit data")
    console.log(stu.id)
    if(stu.id>0)
    {
      alert("postData data with  id")
      this.commonservice.updateData(stu).subscribe()
     
    }
    else{
      alert("postData data without id")
      this.commonservice.postData(stu).subscribe()
    }
     
  }
  reset(e:Student)
  {
    this.commonservice.e=Object.assign({},null)
  }

}
