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
  public  lesposts :any;
  postA : any;
 public postArray : Post[] = [
    {titre:"", categorie:"",description:"",date:""},
  ]
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
    this.unpost.categorie = this.postForm.controls.categorie.value
    this.unpost.description = this.postForm.controls.description.value
    this.unpost.titre = this.postForm.controls.titre.value
    this.unpost.date = this.postForm.controls.date.value

    this.postA = this.localStorageService.getData() || [];
    console.log(this.postA );
    this.postArray.push(this.postA)
    console.log(this.postArray);
    this.localStorageService.setItem('Posts',JSON.stringify(this.unpost))

    this.lesposts = this.localStorageService.setItem('Posts',JSON.stringify(this.unpost)) 
    //sconsole.log(this.localStorageService.setItem('Posts',JSON.stringify(this.unpost)) );

    //const array = JSON.parse(this.localStorageService.getData(this.unpost));
 console.log(this.localStorageService.setItem('Posts',JSON.stringify(this.unpost)));
  }
}
