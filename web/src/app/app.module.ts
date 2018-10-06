import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.router';
import { StartcheckinComponent } from './checkin/startcheckin/startcheckin.component';
import { CheckinComponent } from './checkin/checkin/checkin.component';
import { ConfirmcheckinComponent } from './checkin/confirmcheckin/confirmcheckin.component';
import { HttpService } from './services/http.service';
import { PostService } from './services/post.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToasterService } from './services/toaster.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StartcheckinComponent,
    CheckinComponent,
    ConfirmcheckinComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ToastModule
  ],
  
  providers: [HttpService, PostService, ToasterService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
