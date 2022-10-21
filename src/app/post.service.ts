import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
interface IPost{
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
