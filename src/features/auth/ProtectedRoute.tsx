import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { CookieKeys } from "../../helpers/cookies";
import { ReducedUser, User } from "../../api";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../lib/axios/client";
import { useAuthStore } from "./store";
import { handleAxiosError } from "../../helpers/handleAxiosError";
import { routes } from "../../lib/routes";
import { AppHeader } from "../../pages/app/AppHeader";
import { useEffect } from "react";
import { queryKeys } from "../../lib/react-query/queryKeys";

export const ProtectedRoute = () => {
  const { user: storeUser, setAuth } = useAuthStore();

  const cookieUser = Cookies.get(CookieKeys.USER);
  const parsedUser: ReducedUser | null = cookieUser
    ? JSON.parse(cookieUser)
    : null;
  const token = Cookies.get(CookieKeys.TOKEN);

  const { data, error } = useQuery<User>({
    queryKey: [queryKeys.me],
    queryFn: async () => {
      const res = await client.get(`/users/${parsedUser?.id}`);
      return res.data;
    },
    enabled: Boolean(parsedUser?.id) || !storeUser,
  });

  useEffect(() => {
    const stringifiedUser = JSON.stringify({
      username: data?.username,
      id: data?.id,
    });
    Cookies.set(CookieKeys.USER, stringifiedUser);
    if (token && data?.username && data.id) {
      setAuth(token, { username: data?.username, id: data?.id });
    }
  }, [data]);

  if (!parsedUser?.id || !token) {
    return <Navigate to={routes.login.route} replace />;
  }

  if (error) {
    handleAxiosError(error);
    return <Navigate to={routes.login.route} replace />;
  }

  return <MainLayout />;
};

const MainLayout = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar />
      <div className="w-full">
        <AppHeader />
        <Outlet />
      </div>
    </div>
  );
};
