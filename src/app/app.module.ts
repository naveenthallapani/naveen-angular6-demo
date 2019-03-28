import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule} from '@angular/forms';
import { MatListModule} from '@angular/material/list';
//components
import { AppComponent } from './app.component';
import {  HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VariablesComponent } from './home/variables/variables.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { LifecyclesComponent } from './home/lifecycles/lifecycles.component';
import { HighlightDirective } from './home/variables/highlight.directive';
import { SlideshowDirective } from './home/variables/slideshow.directive';
import { ApiComponent } from './home/api/api.component';
import { ServiceService } from './service.service';
import { ApiloginComponent } from './home/apilogin/apilogin.component';
import { ApiformComponent } from './apiform/apiform.component';
import { ApiformfieldsComponent } from './apiformfields/apiformfields.component';
import { EditComponent } from './home/api/edit/edit.component';
//import { HomeModule } from './home/home.module';
import { ValidationFormComponent } from './home/validation-form/validation-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VariablesComponent,
    NotFoundComponent,
    RegistrationComponent,
    ValidationFormComponent,
    LifecyclesComponent,
    HighlightDirective,
    SlideshowDirective,
    ApiComponent,
    ApiloginComponent,
    ApiformComponent,
    ApiformfieldsComponent,
    EditComponent,

  ],
  imports: [
   
    BrowserModule,MatInputModule,BrowserAnimationsModule,MatButtonModule,FormsModule,MatListModule,
    HttpClientModule,
    //HomeModule,
    RouterModule.forRoot([
      //main module - firstlevel
      {path : '', component:LoginComponent},
      // {path : 'login', component:LoginComponent},
      //dashboard -secondlevel with child componets
      {path : 'home', component:HomeComponent,
        children:[
        {path:'',component:VariablesComponent},
        {path:'variables',component:VariablesComponent},
        {path:'registration',component:RegistrationComponent},
        {path:'valid-form',component:ValidationFormComponent},
        {path:'lifecycle',component:LifecyclesComponent},
        {path:'api',component:ApiComponent},
        {path:'edit/:id/:name',component:EditComponent},
        {path:'apiform',component:ApiformComponent},
        {path:'apilogin',component:ApiloginComponent},
        {path:'apiformfields',component:ApiformfieldsComponent},
      ]}, 
      //pagenotfoud show always placed at the bottom of routings
      {path : '**',component:NotFoundComponent}
          
    ])
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
