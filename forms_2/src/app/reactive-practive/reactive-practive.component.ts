import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-practive',
  templateUrl: './reactive-practive.component.html',
  styleUrls: ['./reactive-practive.component.css']
})
export class ReactivePractiveComponent implements OnInit {
  practiceForm: FormGroup;
  status = ['Stable', 'Ciritcal', 'Finished'];

  constructor() { }

  ngOnInit() {
    this.practiceForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], [this.isValidName.bind(this)]),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.status[0])
    });
  }

  isValidName(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject): any => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ invalidName: true });
        }
        resolve(null);
      }, 2000);
    });
  }

  onSubmit() {
    console.log(this.practiceForm);
    console.log(this.practiceForm.value);
    this.practiceForm.reset({
      'status': this.status[0]
    });
  }
}
