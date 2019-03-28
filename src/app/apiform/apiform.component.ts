import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'; 
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup } from '../../../node_modules/@angular/forms';
@Component({
  selector: 'app-apiform',
  templateUrl: './apiform.component.html',
  styleUrls: ['./apiform.component.css']
})
export class ApiformComponent implements OnInit {
statususer:any;
userform:FormGroup;
  constructor(private serve:ServiceService,private route1:Router) { }

  ngOnInit() {
  }
FormSubmit(event){
  debugger;
  const target=event.target;
  const userdetails1={
    fname:target.querySelector("#fname").value,
    lname:target.querySelector("#lname").value,
    age:target.querySelector("#age").value,
    email:target.querySelector("#email").value,
    password:target.querySelector("#password").value,
  }
  this.serve.adduser1(userdetails1).subscribe((res)=>{
    this.statususer= res;
    alert(this.statususer.status)

    this.route1.navigate(['home/apilogin'])
    alert(this.statususer.status)
   
  })
}

}
