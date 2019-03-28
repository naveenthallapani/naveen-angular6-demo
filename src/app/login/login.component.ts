import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template:`
  <div class="container login-form">
      <div class="row bg-decoration">
        <div class="col-sm-6">
          <h2>Login</h2>
          <form class="example-form">
            <mat-form-field class="example-full-width">
              <input matInput placeholder="username" value="">
            </mat-form-field><br/>
            <mat-form-field class="example-full-width">
              <input matInput placeholder="password" value="">
            </mat-form-field><br/>
            <!-- <button [routerLink]="'home'" mat-raised-button color="accent">Login</button> -->
            <a mat-raised-button color="accent" [routerLink]="['home']">Login</a>
          </form>
        </div>
        <div class="col-sm-6">
          <h2>Register</h2>
          <form class="example-form">
              <mat-form-field class="example-full-width">
                  <input matInput placeholder="Name" value="">
                </mat-form-field><br/>
                <mat-form-field class="example-full-width">
                  <input matInput placeholder="Email" value="">
                </mat-form-field><br/>
            <mat-form-field class="example-full-width">
              <input matInput placeholder="mobile number" value="">
            </mat-form-field><br/>
            <button mat-raised-button color="accent">register</button>
          </form>
        </div>
      </div>
    </div> `
,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
