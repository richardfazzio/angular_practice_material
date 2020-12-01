import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactivePractiveComponent } from './reactive-practive/reactive-practive.component';

@NgModule({
    declarations: [AppComponent, ReactiveFormComponent, ReactivePractiveComponent],
    imports: [
        BrowserModule,
        FormsModule, // Template approach
        ReactiveFormsModule, // Reactive approach
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
