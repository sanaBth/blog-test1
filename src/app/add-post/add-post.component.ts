import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators} from '@angular/forms';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 
  constructor(private localStorageService : PostService) { }
  public post = Post ;
  public titre: string = '';
  public categorie: string = '';
  public description: string = '';
  public date : string = '';

  ngOnInit(): void {
  }


  postForm = new FormGroup
  ({
    titre: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    categorie : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
  })
 
  public unpost = {titre: this.titre, categorie: this.categorie, description: this.description ,
    date : this.date}

  public addPost(){
    this.unpost.categorie = this.categorie
    this.unpost.description = this.description
    this.unpost.titre = this.titre
    this.unpost.date = this.date
    this.localStorageService.setItem('Posts',JSON.stringify(this.unpost))
  }
}
