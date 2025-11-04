import { create } from "zustand";
import { devtools } from "zustand/middleware";
import Cookies from "js-cookie";
import { CookieKeys } from "../../helpers/cookies";
import { ReducedUser } from "../../api";

interface AuthStore {
  token: string | null;
  user: ReducedUser | null;
  setAuth: (token: string, user: ReducedUser) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    (set) => ({
      token: Cookies.get(CookieKeys.TOKEN) || null,
      user: null,
      setAuth: (token, user) => {
        Cookies.set(CookieKeys.TOKEN, token);
        set({ token, user }, false, "setAuth");
      },
      clearAuth: () => {
        Cookies.remove(CookieKeys.TOKEN);
        set({ token: null, user: null }, false, "clearAuth");
      },
    }),
    { name: "AuthStore" },
  ),
);
