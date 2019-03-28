import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { ComponentRef } from '../../../../node_modules/@angular/core/src/render3';

export class variable {
  age:number;
  name:string;
  friuts:string;
}
@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
  today: Date;
  color: string;
  hideit:boolean =false;
 //constructor - firt loads
  constructor() { }
  //ngOnInit - after constructor loading
  ngOnInit() {
    this.today = new Date();
  }
  TodayDate(){
      this.today = new Date();
      alert(this.today)
    }
    over(){
      this.hideit = true;
    }
    onClickMe(){ alert("hi welcome click event")}
  //variable-declaration   variable-datatype    variable-initilization
  age:number =30 ;
  anil:string="Anil Kumar"
  name:string = "Vanaparti";
  fruits:string[] = ['apple','kiwi','mango'];
  items:string[] = ['copy','tea'];
  cost:number[] = [10,20];
  gender:boolean = true;
  user:any = {name:"kumar",age:30,qualification:"Btech"}
}
// *ngFor = ng-repeat = for
// *ngIf  = ng-if = if
 