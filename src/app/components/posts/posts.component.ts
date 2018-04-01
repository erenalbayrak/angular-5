import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../service/post.service";
import index from "@angular/cli/lib/cli";
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  currentPost: Post = this.getEmptyPostObject();
  isEdit = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((actVal, index) => {
      if (post.id === actVal.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = this.getEmptyPostObject();
      }
    });
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  private getEmptyPostObject(): Post {
    return {id: 0, title: "", body: ""};
  }
}
