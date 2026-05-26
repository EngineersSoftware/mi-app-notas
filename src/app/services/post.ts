import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private http = inject(HttpClient);

  readonly postsSignal = signal<PostModel[]>([]);
  readonly loadingSignal = signal<boolean>(false);
  readonly errorSignal = signal<string | null>(null);

  loadPosts(limit: number = 5) {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.http
      .get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .subscribe({
        next: (data) => {
          this.postsSignal.set(data);
          this.loadingSignal.set(false);
        },
        error: () => {
          this.postsSignal.set([]);
          this.loadingSignal.set(false);
          this.errorSignal.set('No se pudieron cargar los artículos. Intenta nuevamente.');
        },
      });
  }
}
