import { useMemo } from "react";

export const useLocalUser = () => {
  return useMemo(() => {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    return user;
  }, []);
};
