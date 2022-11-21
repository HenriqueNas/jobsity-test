interface AuthContextInterface {
  user?: User;
  isAuthenticated: boolean;
  register: (user: User) => Promise<void>;
  signInWithPin: (pin: string) => Promise<boolean>;
  signInWithLocalAuth: (success: boolean) => Promise<void>;
  signOut: () => Promise<void>;
}
