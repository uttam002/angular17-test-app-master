import { Injectable } from "@angular/core";

export interface User {
  id: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  createdAt: Date;
}

@Injectable({providedIn: 'root'})
export class AuthService{
  private isAuthenticated = false;
  private readonly USERS_KEY = 'registered_users';

  login(username: string, password: string): boolean {
    // Check against registered users in localStorage
    const users = this.getUsers();
    const user = users.find(u => u.userName === username && u.password === password);

    if (user) {
      this.isAuthenticated = true;
      // Store current user in session
      sessionStorage.setItem('current_user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  register(userData: Omit<User, 'id' | 'createdAt'>): boolean {
    try {
      const users = this.getUsers();

      // Check if user already exists
      if (users.find(u => u.userName === userData.userName || u.email === userData.email)) {
        alert('User already exists');
        return false;
      }

      const newUser: User = {
        ...userData,
        id: this.generateId(),
        createdAt: new Date()
      };

      users.push(newUser);
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      alert('User registered successfully');
      return true;
    } catch (error) {
      console.error('Error registering user:', error);
      return false;
    }
  }

  getUsers(): User[] {
    try {
      const users = localStorage.getItem(this.USERS_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error retrieving users:', error);
      return [];
    }
  }

  getCurrentUser(): User | null {
    try {
      const user = sessionStorage.getItem('current_user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error retrieving current user:', error);
      return null;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem('current_user');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
