import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { PostList } from './components/post-list/post-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, PostList],
  template: `
  <app-header></app-header>
  <main style="padding: 20px;">
  <app-post-list></app-post-list>
  </main>
  `
})
export class App {

}
