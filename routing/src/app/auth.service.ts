import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    loggedIn = false;

    login() {
        this.loggedIn = true;
    }

    logOut() {
        this.loggedIn = false;
    }

    isAuthenticated() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });
    }
}
