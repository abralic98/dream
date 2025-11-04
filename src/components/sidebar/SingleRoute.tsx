import { Link } from "react-router-dom";
import { Route } from "../../lib/routes";
import { cn } from "../../lib/utils";

interface Props {
  route: Route;
  className?: string;
  action?: () => void;
}
export const SingleRoute = ({ route, className, action }: Props) => {
  return (
    <Link
      onClick={action}
      className={cn(
        "w-full bg-neutral-900 p-4 text-white font-bold text-xl rounded-lg hover:bg-neutral-700",
        className,
      )}
      to={route.route}
    >
      {route.name}
    </Link>
  );
};
