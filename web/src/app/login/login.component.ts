import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  loggedIn: boolean = true;

  constructor(private router : Router) {}

  ngOnInit() {}

  onSubmit(form : NgForm) {
      if(form.value.userName == '' || form.value.password == '') {
        return;
      
      }else if(form.value.userName == 'pavan' && form.value.password == 'pavan') {
        this.router.isActive.prototype = true;;
        this.router.navigate(['./home'])
      
      }else {
        this.loggedIn = false;
      }
  }
}
