import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  getData() {
    return localStorage.getItem('Posts');
 }

  public removeItem(key:string) {
    localStorage.removeItem(key);
  }


}
