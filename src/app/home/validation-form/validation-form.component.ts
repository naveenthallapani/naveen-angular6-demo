import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {
  myname:string;
  myname1:string;
  myname2:string;
  myname3:string;
  myname6:number;
  myname5:string;
  myname7:string;
  constructor() { }

  ngOnInit() {
  }

}
