import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _localStorageService : PostService) { }
  public queryResult :any =[];
  public tablePost :any;
  postA : any;
  ngOnInit(): void {
   //console.log(this.localStorageService.getData());
    //const tablePost = JSON.parse(this.localStorageService.getData());
   // const result=JSON.parse(this._localStorageService.getData());
   //this.postA = JSON.parse(this._localStorageService.getData('Posts')) ;
   
   console.log(this.postA);
   
  }

}
