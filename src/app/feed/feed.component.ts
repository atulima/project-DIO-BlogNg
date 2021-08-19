import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { Posts } from '../models/posts';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public posts!: Posts[];
  // public postsFiltered!: Posts[];
  public post = {
    nome:"teste",
    mensagem:""
  } as Posts;
  // public post!: Posts;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.listPosts();
  }

  listPosts(){
    this.postService.getPosts().subscribe((data: Posts[]) =>{
    this.posts = data
  });
}
  sendPost(){
    // console.log(this.post.nome);
    this.postService.addPost(this.post).subscribe((data: Posts) =>{
      this.post = data;
      location.assign('/feed');
    });

  }
  filterPosts(name:string): void{
    
    this.posts = this.posts.filter((value: Posts) => value.nome === name);
    // console.log(filteredPosts) 
    // this.posts = filteredPosts;
    }
    
  }


