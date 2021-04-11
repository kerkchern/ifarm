import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  usernames = ["landlord", "admin",
  "farmer1", "farmer2", "farmer3",
   "worker1", "worker2", "worker3"];

  constructor(private router: Router) { }

  authenticate(username, password){

    for(var val of this.usernames){
      if((val === username) && password === 'password'){
      sessionStorage.setItem('authenticateUser', username);
      return true;
      }
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  getUser(){
    return sessionStorage.getItem('authenticateUser');
  }

  logout(){
    if(confirm("Are you sure to logout?")){
      this.router.navigate(['']);
      sessionStorage.removeItem('authenticateUser');
    }
  }
}
