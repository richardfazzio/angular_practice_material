import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: true }) userForm: NgForm;
  defaultQuestion = "pet";
  answer: string;
  genders = ["male", "female"];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = "Superuser";

    // setValue overwrites the entire form
    // this.userForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    // patchValue only changes what is passed
    this.userForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }

  // Using element ref
  // onSubmit(form: NgForm) {
  //   console.log('submitted', form);
  // }

  // Using Viewchild
  onSubmit() {
    this.user.username = this.userForm.value.userData.username;
    this.user.email = this.userForm.value.userData.email;
    this.user.secretQuestion = this.userForm.value.secret;
    this.user.answer = this.userForm.value.questionAnswer;
    this.user.gender = this.userForm.value.gender;
    this.submitted = true;


    this.userForm.reset(); // Reset state of for: touched / valid / etc
  }
}
