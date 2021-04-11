import { AuthenticationService } from '../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMsg: string = "Invalid Credentials";
  invalidLogin: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.authService.authenticate(this.username,this.password)){
      this.router.navigate(['home']);
      this.invalidLogin = false;
    } else{
      this.invalidLogin = true;
    }
  }

}

