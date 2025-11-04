import { usePagination } from "../../../hooks/usePagination";
import { Game } from "../../../api";
import { PaginationTrigger } from "../../../components/PaginationTrigger";
import { SingleGameCard } from "./SingleGameCard";
import { Loader2 } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { queryKeys } from "../../../lib/react-query/queryKeys";

export const GameList = () => {
  const { control } = useFormContext();
  const status = useWatch({
    control,
    name: "status",
  });

  const query = usePagination<Game>({
    queryKey: [queryKeys.games, status],
    url: "/games/",
    pageSize: 10,
    // gcTime: 0,
    params: {
      status: status === "All" ? undefined : status,
      // after: "2025-11-05T23:59:59Z",
      // before: "2025-11-05T23:59:59Z",
    },
  });

  if (query.isLoading) {
    return (
      <div className="flex justify-center py-4">
        <Loader2 className="w-20 h-20 animate-spin text-white" />
      </div>
    );
  }

  const allGames = query.data?.pages.flatMap((page) => page.results ?? []);

  return (
    <div className="gap-4 flex flex-wrap  items-start overflow-auto h-[80vh] p-16">
      {allGames?.map((g) => {
        return <SingleGameCard game={g} key={g.id} />;
      })}

      {query.hasNextPage && <PaginationTrigger query={query} />}
    </div>
  );
};
