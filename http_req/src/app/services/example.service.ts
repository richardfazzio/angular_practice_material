import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class ExampleService {
    users: User[];

    constructor() { 
        this.users = [{
            userId: '123',
            username: 'Richard Fazzio'
        },{
            userId: '456',
            username: 'John Smith',
            avatar: 'unknown_man.jpgs'
        }];
    }
}

