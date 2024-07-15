import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7286/api';  // API base URL

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    console.log(username,password);
    debugger;
    return this.http.post<any>(`${this.baseUrl}/users/login`, { email: username, password })
      .subscribe(response => {
        if (response && response.token) {
         debugger;
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
