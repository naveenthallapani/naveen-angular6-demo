import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service'

@Component({ 
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers:[ServiceService]
})
export class ApiComponent implements OnInit {
  deletedata: any;
  userdata: any;
 

  constructor(private serv:ServiceService) { }
  userslist:any;
  ngOnInit() {
  	this.listUsers();
  }
  //get
  listUsers(){
    this.serv.listUsers().subscribe((res)=>{
      this.userslist=res
    })
  }
   //delete user
   deleteuser(id){
     this.serv.deleteUser(id).subscribe((res)=>{
       this.deletedata = res;
       alert(this.deletedata.status + this.deletedata.msg)
       this.listUsers();
     })
   } 
   //viewuser
   viewuser(id){
     this.serv.viewUser(id).subscribe((res)=>{
       this.userdata = res;
      
       alert(this.userdata.status + this.userdata.msg)
       this.userdata = res;
     })
   }
}