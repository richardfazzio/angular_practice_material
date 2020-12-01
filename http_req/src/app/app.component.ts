import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostServiceService } from './post-service.service';
import { Subscription } from 'rxjs';
import { ExampleService } from './services/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  errorMessage = null;
  private errorMessageSubject: Subscription;

  constructor(private http: HttpClient, private postService: PostServiceService, private exampleService: ExampleService) { }

  ngOnInit() {
    this.errorMessageSubject = this.postService.errorHandler.subscribe(errorMessage => {
      console.error(errorMessage);
      this.errorMessage = errorMessage || 'Unkown error has occurred!';
    });
    this.fetchPosts();
    console.log('userus', this.exampleService.users);
    setTimeout(() => {
      console.log('userus', this.exampleService.users);
    }, 3000);
  }

  ngOnDestroy() {
    this.errorMessageSubject.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts()
      .subscribe(() => this.loadedPosts = []);
  }

  fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.loadedPosts = posts || [];
        this.isFetching = false;
      },
        err => {
          console.error(err);
          this.isFetching = false;
          this.errorMessage = err && err.message || 'Unkown error has occurred!';
        },
        () => {
          console.log('Completed');
        });
  }

  onHandleError() {
    this.errorMessage = null;
  }

  // fun2 = (b: boolean = true): boolean => {
  //   return true;
  // }
}

