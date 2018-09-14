import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
