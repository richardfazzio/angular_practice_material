import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { UserService } from "./user.servic";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userActived = false;
  private sub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.sub = this.userService.activatedEventEmmiter.subscribe(activated => {
      this.userActived = activated;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
