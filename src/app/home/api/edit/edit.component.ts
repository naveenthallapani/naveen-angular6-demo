import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { ServiceService } from 'src/app/service.service';
 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editstatus: any;
  userdata: any;
  FirstName: string;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private ser:ServiceService) {}
  Id:number;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.Id = params.id
      this.FirstName = params.name
      alert(this.FirstName)
    })
    //view user loading
    this.viewuser(this.Id)
  } 
  //view user details
  viewuser(x){
    this.ser.viewUser(x).subscribe((res)=>{
      this.userdata = res;
    })
  }
  //edit user method
  editUserSubmit(event){
    debugger;
    const target = event.target;
    const newuserdetails={
      fname: target.querySelector("#fname").value,
      lname:target.querySelector("#lname").value,
      age:target.querySelector("#age").value,
      email:target.querySelector("#email").value,
      password:target.querySelector("#password").value,
    }
    this.ser.editUser(this.Id,newuserdetails).subscribe(res=>{
      this.editstatus = res;
      alert(this.editstatus.status)
      this.router.navigate(['home/api'])
    })
  }
}
