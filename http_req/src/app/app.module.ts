import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostServiceService } from './post-service.service';
import { AuthInterceptorService } from './auth.interceptor.service';
import { ExampleService } from './services/example.service';
import { LoggingInterceptorSevice } from './logging-interceptor.service';
import { UnusedComponent } from './unused/unused.component';

@NgModule({
  declarations: [AppComponent, UnusedComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    PostServiceService,
    ExampleService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, // Order matters =>  order imported => order executed
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorSevice, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
