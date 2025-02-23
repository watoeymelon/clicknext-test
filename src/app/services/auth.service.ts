import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'user1@example.com', username: 'user1', password: 'password123' },
    { email: 'user2@example.com', username: 'user2', password: '123456' }
  ];
  private loggedInUserKey = 'loggedInUser';

  constructor(private router: Router) {} 


  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem(this.loggedInUserKey, JSON.stringify(user)); 
      this.router.navigate(['/kanban']); 
      return true;
    }
    return false;
  }

  
  logout(): void {
    localStorage.removeItem(this.loggedInUserKey); 
    this.router.navigate(['/login']); 
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInUserKey) !== null;
  }
}
