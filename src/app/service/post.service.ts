import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Post} from "../models/Post";

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
};

@Injectable()
export class PostService {

  postsURL = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsURL);
  }

  getPost(id: number): Observable<Post> {
    const URL = `${this.postsURL}/${id}`;
    return this.http.get<Post>(URL);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsURL, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const URL = `${this.postsURL}/${post.id}`;
    return this.http.put<Post>(URL, post, httpOptions);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === "number" ? post : post.id;
    const URL = `${this.postsURL}/${id}`;

    return this.http.delete<Post>(URL, httpOptions);
  }
}
