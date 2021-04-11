import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.username = this.authService.getUser();
  }

}
