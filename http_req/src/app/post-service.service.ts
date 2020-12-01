import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  errorHandler = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    let params  = new HttpParams();
    params = params.append('print', 'pretty'); // I DO NOT LIKE THIS
    params = params.append('hello', 'world');
    params = params.append('x', 'd');
    this.http.post<{ name: string }>('[FIREBASE_URL]posts.json', postData, {
      headers: new HttpHeaders({
        'Custom-Header': 'Hello'
      }),
      params,
      // observe: 'body', // Default
      // observe: 'response' // Get entire response object [body, statusCode, etc...]
    })
      .subscribe(repsonse => {
        console.log(repsonse);
      }, err => {
        this.errorHandler.next(err.message);
      });
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>('[FIREBASE_URL]posts.json', {
    })
      .pipe(map(response => {
        response = response || {};
        const arr: Post[] = [];
        Object.keys(response).forEach(key => arr.push({ ...response[key], id: key }));
        return arr;
      }),
      catchError(errorRes => {
        // Send to server, handle error not in UI... Log it etc...
        return throwError(errorRes);
      }),
      tap(evt => {
        console.log(evt);
      })
      );
  }

  deletePosts() {
    return this.http.delete('[FIREBASE_URL]posts.json', {
      observe: 'events',
      // responseType: 'json' // Default
      // responseType: 'text' // Treats body as text
    })
    .pipe(tap(evt => {
      console.log(evt);
    }));
  }

}
