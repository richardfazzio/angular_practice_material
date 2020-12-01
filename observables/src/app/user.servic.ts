import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class UserService {
    // activatedEventEmmiter = new EventEmitter<boolean>();
    activatedEventEmmiter = new Subject<boolean>();
}