import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from './shortened.pip';
import { PopPipe } from './pop.pipe';
import { FilterInputPipe } from './filter-input.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';
import { SortListPipe } from './sort-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    PopPipe,
    FilterInputPipe,
    ReverseStringPipe,
    SortListPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
