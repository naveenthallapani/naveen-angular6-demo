import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service'

@Component({
  selector: 'app-apilogin',
  templateUrl: './apilogin.component.html',
  styleUrls: ['./apilogin.component.css'],
  providers:[ServiceService]
})
export class ApiloginComponent implements OnInit {
  constructor(private serv:ServiceService) {}
  elem:any ;
  bt:any ;
  bt1:any ;
  ngOnInit() {
    // this.bt1.style.display="none"
  }
  buttonShow(){
    this.elem= document.getElementById("demo");
    this.bt=document.getElementById("1");
    this.bt1=document.getElementById("2");
    this.elem.innerHTML = "Paragraph Changed";
    this.bt.style.display= "none"
    this.bt1.style.display="initial"
  }
  buttonHide(){
    this.elem.innerHTML=" ";
    this.bt.style.display="initial"
    this.bt1.style.display="none"
  
  }
 
}
