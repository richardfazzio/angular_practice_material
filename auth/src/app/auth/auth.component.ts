import { Component, ComponentFactoryResolver, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
  isLoggedInModde = true;
  isFetching = false;
  err: string = null;
  private closeSub: Subscription;
  @ViewChild(PlaceHolderDirective, { static: false }) alertHost: PlaceHolderDirective;
  // @ViewChild('form', { static: true }) dynamicForm: NgForm;
  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnDestroy() {
    if (!!this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  switchMode() {
    this.isLoggedInModde = !this.isLoggedInModde;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    this.isFetching = true;

    let obs: Observable<AuthResponseData>;

    if (this.isLoggedInModde) {
      // TODO ...
      obs = this.authService.login(email, password);
    } else {
      obs = this.authService.signUp(email, password)
      // console.log(this.dynamicForm.value);
    }
    obs.subscribe(user => {
      console.log('user', user);
      this.isFetching = false;
      this.router.navigate(['/recipes']);
    }, errMessage => {
      console.error(errMessage);
      this.err = errMessage;
      this.showErrorAlert(errMessage);
      this.isFetching = false;
    });
    form.reset();
  }

  resetError() {
    this.err = null;
  }

  // Dynamically loading component
  private showErrorAlert(message: string) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const host = this.alertHost.viewContainerRef;
    host.clear(); // Clear all components with this
    const component = host.createComponent(factory);
    component.instance.message = message;
    this.closeSub = component.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      host.clear();
    });
  }
}
