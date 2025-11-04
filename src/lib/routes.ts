const auth = "/auth";
const app = "/app";

export const routes = {
  login: { name: "Login", route: `${auth}/login` },
  register: { name: "Register", route: `${auth}/register` },
  dashboard: { name: "Dashboard", route: `${app}/dashboard` },
  profile: { name: "My Profile", route: `${app}/profile` },
  logout: { name: "Logout", route: `${auth}/login` },
  game: { name: "Game", route: `${app}/game` },
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes]["route"];

export type RouteName = (typeof routes)[keyof typeof routes]["name"];

export interface Route {
  route: RoutePath;
  name: RouteName;
}
