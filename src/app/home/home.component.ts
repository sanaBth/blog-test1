import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private localStorageService : PostService) { }

  public tablePost :any;
  ngOnInit(): void {
   //console.log(this.localStorageService.getData());
    //const tablePost = JSON.parse(this.localStorageService.getData());
    const tablePost = this.localStorageService.getData();
   console.log(tablePost);
   
  }

}
