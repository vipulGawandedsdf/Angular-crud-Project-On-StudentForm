import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  stu:Student[];
  constructor(public commonservice:CommonService) { 
     
  }

  ngOnInit(): void {
    this.commonservice.getData().subscribe(data=>
      {
        this.stu=data
      }
       
    )
  }
  deleteData(id:number){
    alert("deleteData done");

    this.commonservice.deleteData(id).subscribe(); 

  }
  
  editData(stu:Student)
  {
     this.commonservice.e=Object.assign({},stu)
  }

}
  