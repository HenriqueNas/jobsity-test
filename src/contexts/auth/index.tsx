import React, { createContext, useContext, useEffect, useState } from "react";
import { setItem, getItem, removeItem } from "../../services/storage";

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

const AUTH_KEY = "user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const user = await getItem(AUTH_KEY);
      setUser(user);
    })();
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  async function signInWithPin(pin: string) {
    const localUser: User = user ?? (await getItem(AUTH_KEY));

    if (localUser.pin === pin) {
      setUser(localUser);
      await setItem(AUTH_KEY, localUser);
      return true;
    }

    return false;
  }

  async function signInWithLocalAuth(success: boolean) {
    if (success) {
      const localUser: User = user ?? (await getItem(AUTH_KEY));

      setUser(localUser);
      await setItem(AUTH_KEY, localUser);
    }
  }

  async function register(newUser: User) {
    setUser(newUser);
    await setItem(AUTH_KEY, newUser);
  }

  async function signOut() {
    setUser(null);
    await removeItem(AUTH_KEY);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        register,
        signInWithPin,
        signInWithLocalAuth,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
