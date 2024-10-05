interface User {
  email: string;
  password: string;
}

export const auth = {
  currentUser: null as User | null,
  
  signUp(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some((user: User) => user.email === email)) {
        reject(new Error('User already exists'));
      } else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        this.currentUser = { email, password };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        resolve();
      }
    });
  },

  signIn(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => u.email === email && u.password === password);
      if (user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        resolve();
      } else {
        reject(new Error('Invalid email or password'));
      }
    });
  },

  signOut(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  },

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    }
    return this.currentUser;
  }
};