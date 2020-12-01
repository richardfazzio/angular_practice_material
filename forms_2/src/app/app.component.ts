import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    @ViewChild('f', { static: true }) form: NgForm;
    subscriptions = ['Basic', 'Advanced', 'Pro'];

    constructor() {}

    onSubmit() {
      if (this.form.invalid && this.form.touched) {
        const invalids = [];
        const controls = this.form.controls;
        Object.keys(controls).forEach(key => {
          if (controls[key].invalid) {
            invalids.push(key);
          }
        });
        return alert(`${invalids.join(' and ')} are invalid...`);
      }
      const values = this.form.value;
      console.log(values);
    }
}
