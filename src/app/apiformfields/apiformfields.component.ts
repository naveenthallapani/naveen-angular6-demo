import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup  } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
//import { formArrayNameProvider } from '../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'app-apiformfields', 
  templateUrl: './apiformfields.component.html',
  styleUrls: ['./apiformfields.component.css']
})
export class ApiformfieldsComponent implements OnInit {
  statususer: any;
  userform :FormGroup;
  constructor(private serve:ServiceService,private route:Router) { }
    //formgroup,frombuilder,formvalidators
  ngOnInit() {
  }
  FormSubmit(event){
    //debugger;
    const target = event.target;
    const userdetails={
      fname: target.querySelector("#fname").value,
      lname:target.querySelector("#lname").value,
      age:target.querySelector("#age").value,
      email:target.querySelector("#email").value,
      password:target.querySelector("#password").value,
      // fname: 'kiran',
      // lname : 'kumar',
      // age:32,
      // email:'kiran@gmail.com',
      // password:'1234',
    }
  
    this.serve.addUser(userdetails).subscribe((res)=>{
      this.statususer= res;
      alert(this.statususer.status)
      this.route.navigate(['home/api'])
      alert(this.statususer.status)
    })
  }
}
