import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators} from '@angular/forms';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 
  constructor(private localStorageService : PostService, private route: ActivatedRoute,
    private router: Router ) { }

  i : number ; 
  postForm : FormGroup;
  currentPost : Post=new Post( '','','',new Date()  );
  actionPage : string ='New post';

  ngOnInit(): void 
  {
    this.i = this.route.snapshot.params.i;
    console.log(this.i);
    if(this.i)
    {
      this.actionPage='Edit post'
      this.currentPost = this.localStorageService.getonePost(this.i)
      console.log(this.currentPost);
    }
    this.postForm = new FormGroup
    ({
      titre: new FormControl(this.currentPost.titre,Validators.required),
      description: new FormControl(this.currentPost.description,Validators.required),
      categorie : new FormControl(this.currentPost.categorie,Validators.required),
      
    })
  }

  public savePost()
  {
    this.currentPost.categorie = this.postForm.controls.categorie.value
    this.currentPost.description = this.postForm.controls.description.value
    this.currentPost.titre = this.postForm.controls.titre.value
    this.currentPost.date = new Date();
    if(this.actionPage == 'New post')
    {
      this.localStorageService.storeOnLocalStorage(this.currentPost);
    }
    else
    {
      this.localStorageService.updateItem(this.i,this.currentPost )
    }
    this.router.navigate(['/'])
  
  }


}
