import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Post {

  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
  getPost(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
