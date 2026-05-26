import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { HighlightCard } from '../../directives/highlight-card';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, TruncatePipe, HighlightCard],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {

  private postService = inject(PostService);

  public posts = this.postService.postsSignal;
  public loading = this.postService.loadingSignal;
  public error = this.postService.errorSignal;

  ngOnInit(){
    this.postService.loadPosts();
  }

  public reloadData(){
    this.postService.loadPosts();
  }
}
