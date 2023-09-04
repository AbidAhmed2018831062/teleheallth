import { useCallback, useMemo } from "react";

export const useLocalUser = () => {
  const user = useMemo(() => {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    return user;
  }, []);
  const setUser = useCallback((user) => {
    localStorage.setItem("user", JSON.stringify(user));
  }, []);
  const clearUser = () => localStorage.removeItem("user");
  return { user, setUser, clearUser };
};
