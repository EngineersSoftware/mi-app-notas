import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert } from '../alert/alert';
import { Post } from '../../services/post';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, Alert],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {

  private postService = inject(Post);

  public posts: any[] = [];

  ngOnInit(): void {
      this.postService.getPost().subscribe({
        next: (data) => {
          this.posts = data;
          console.log('Datos cargados con exito:', data);
        },
        error: (err) => {
          console.error('Hubo un error al traer los datos', err)
        }
      });
  }
}
