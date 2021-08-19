import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


  getPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>('http://localhost:3000/posts');
  }
  

  addPost(post: Posts): Observable<Posts>{
    return this.http.post<Posts>('http://localhost:3000/posts', post);
  }

 
}
