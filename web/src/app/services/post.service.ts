import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  constructor(private httpService : HttpService) {}

  getPosts() {
    this.httpService.get("posts");
  }

}
