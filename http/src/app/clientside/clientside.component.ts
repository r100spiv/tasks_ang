import { Component } from '@angular/core';

import { User } from './client';
import { HttpService } from '../service';

@Component({
  selector: 'app-clientside',
  templateUrl: './clientside.component.html',
  styleUrls: ['./clientside.component.css'],
  providers: [HttpService]
})
export class ClientsideComponent {
  user: User = new User("", "");
  receivedUser: User | undefined; // полученный пользователь
  done: boolean = false;
  constructor(private httpService: HttpService) { }
  submit(user: User) {
    this.httpService.postData(user)
      .subscribe({
        next: (data: any) => { this.receivedUser = data; this.done = true; },
        error: error => console.log(error)
      });
  }
}
