import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {S
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['dave', 'john'];

  constructor() { }
  // formControl
  // p1 => initla value
  // p2 => [validators]
  // p3 => [async validators]
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null,[ Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
        ], [this.forbiddenEmails]),
      }),
      gender: new FormControl(this.genders[0]),
      hobbies: new FormArray([]),
    });

    // this.signupForm.valueChanges.subscribe(data => { // values
    //   console.log(data);
    // });

    // this.signupForm.statusChanges.subscribe(data => { // Valid / invalid / pending
    //   console.log(data);
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject): any => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
