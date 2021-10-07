import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _localStorageService : PostService) { }
  public posts : Post[] =[];

  ngOnInit(): void {
   this.refresh();
  }
  refresh ()
  {
    this.posts=this._localStorageService.getPosts();
  }
 
  supprimer(i:number)
  {
    this._localStorageService.removeItem(i);
    this.refresh()
  }
}
