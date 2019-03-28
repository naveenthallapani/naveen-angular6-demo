import { Component, OnInit, OnDestroy, AfterViewInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifecycles',
  templateUrl: './lifecycles.component.html',
  styleUrls: ['./lifecycles.component.css']
})
export class LifecyclesComponent implements OnInit,OnDestroy,AfterViewInit,DoCheck,AfterViewInit{
 fname :string;
  
  constructor() { }

  ngOnInit() {
    alert('HI this is ngOnInit');
    console.log('ngOnInit')
  }

  ngOnDestroy(){
    alert('HI this page was Destroyed/closed');
     console.log('ngDestroy')
  }
  
  ngAfterViewInit(){
   alert('HI this page was in view stage');
  } 
  ngAfterContentInit(){
    alert('this page is ngAfterContentInit');
  }
///////////////////////////////////////////////////
  ngDoCheck(){// pls dont use this 
    alert('HI this page was in docheck');
  }
  ngAfterContentChecked(){ // pls dont use this 
  	alert('ngAfterContentChecked');
  }
  ngAfterViewChecked(){// pls dont use this 
    alert('ngAfterViewChecked');

  }
}
