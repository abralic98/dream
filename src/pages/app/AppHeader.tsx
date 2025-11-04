import { H2 } from "../../components/Typography";
import { useLocation } from "react-router-dom";
import { routes } from "../../lib/routes";

export const AppHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const currentRoute = Object.values(routes).find(
    (r) => r.route === currentPath,
  );

  if (!currentRoute?.name) return null;

  return (
    <div className="w-full bg-neutral-900 h-20 px-4 flex items-center">
      <H2>{currentRoute?.name}</H2>
    </div>
  );
};
