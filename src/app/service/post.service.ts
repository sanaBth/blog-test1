import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public postArray : Post[] = [
    {titre:"", categorie:"",description:"",date:""},
  ]
  postA : any;
  constructor() { }

  public setItem(key: string, value: string) 
  {
    localStorage.setItem(key, value);
  }

  public storeOnLocalStorage(taskTitle: string): void {
          
    // get array of tasks from local storage
    this.postA = localStorage.getItem('Posts') || [];
    // push new task to array
    this.postArray.push(this.postA);
    // insert updated array to local storage
    localStorage.setItem('Posts', this.postA);
    //console.log(localStorage.getItem('Posts') || 'LocaL storage is empty');
}
  getData()
  {
   /* const posts = JSON.parse(localStorage.getItem('Posts')) || [];*/
  return localStorage.getItem('Posts');
    
 }
 
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }


}
