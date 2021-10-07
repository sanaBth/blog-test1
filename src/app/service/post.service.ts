import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public posts : Post[] = [
   
  ]
  postA : any;
  constructor() { }

    public storeOnLocalStorage(post: Post): void 
    {
      // get array of tasks from local storage
      this.posts = JSON.parse(localStorage.getItem('Posts') || '[]');
      // push new task to array
      this.posts.push(post);
      // insert updated array to local storage
      localStorage.setItem('Posts',JSON.stringify(this.posts));
      //console.log(localStorage.getItem('Posts') || 'LocaL storage is empty');
    }
    getPosts()
    {
      /* const posts = JSON.parse(localStorage.getItem('Posts')) || [];*/
      return JSON.parse(localStorage.getItem('Posts') || '[]');

    }
    getonePost(i : number)
    {
      /* const posts = JSON.parse(localStorage.getItem('Posts')) || [];*/
      this.posts =JSON.parse(localStorage.getItem('Posts') || '[]');
      return this.posts[i]
    }

    public removeItem(i:number) 
    {
      this.posts =JSON.parse(localStorage.getItem('Posts') || '[]')
      this.posts.splice(i,1)
      localStorage.setItem('Posts',JSON.stringify(this.posts));
    }

    public updateItem(i:number,updatePost :Post) 
    {
      this.posts =JSON.parse(localStorage.getItem('Posts') || '[]')
      this.posts.splice(i,1,updatePost);
      localStorage.setItem('Posts',JSON.stringify(this.posts));
    }
 
}
