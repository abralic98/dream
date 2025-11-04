import { SingleRoute } from "./SingleRoute";
import { Route } from "../../lib/routes";
import { Logout } from "../../features/auth/logout/Logout";
import { CreateNewGame } from "../../features/dashboard/games/CreateNewGame";

export const Sidebar = () => {
  const sidebarRoutes: Route[] = [
    {
      name: "Dashboard",
      route: "/app/dashboard",
    },
    {
      name: "My Profile",
      route: "/app/profile",
    },
  ];

  return (
    <div className="w-[350px] h-full bg-neutral-800 flex flex-col p-4 justify-between">
      <div className="flex flex-col gap-2">
        <CreateNewGame />
        {sidebarRoutes.map((r) => {
          return <SingleRoute key={r.name} route={r} />;
        })}
      </div>
      <Logout />
    </div>
  );
};
