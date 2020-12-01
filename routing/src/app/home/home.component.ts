import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authservive: AuthService) { }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['servers'], {relativeTo: this.route});
  }

  navigatetoServer(id: number) {
    this.router.navigate(['servers', id, 'edit'], {queryParams: {allowEdit: true}, fragment: 'loading'});
  }

  async logon() {
    await this.authservive.login();
  }

  async logout() {
    await this.authservive.logOut();
  }
}
