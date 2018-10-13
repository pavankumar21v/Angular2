import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  BASE_URL = "https://jsonplaceholder.typicode.com/posts";
  private posts: any;
  constructor(private http : Http, private toastr : ToastrService) {}

  ngOnInit() {
    this.loadPosts();
  }
    
  loadPosts() {
   this.http.get(this.BASE_URL).subscribe(
      response => {
         this.posts =  response.json();
         this.toastr.success("Posts loaded...", "Success!"); 
      }, error => {
          console.error(error);
      });
  }

  createPost(input : HTMLInputElement) {
      let post = {title : input.value };
      this.http.post(this.BASE_URL, post);
  }
}
