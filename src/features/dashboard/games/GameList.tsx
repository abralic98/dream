import { usePagination } from "../../../hooks/usePagination";
import { Game, StatusEnum } from "../../../api";
import { PaginationTrigger } from "../../../components/PaginationTrigger";
import { SingleGameCard } from "./SingleGameCard";

export const GameList = () => {
  const query = usePagination<Game>({
    queryKey: ["games"],
    url: "/games/",
    pageSize: 10,
    gcTime: 0,
    params: {
      status: StatusEnum.OPEN,
      after: "2025-11-05T23:59:59Z",
      before: "2025-11-05T23:59:59Z",
    },
  });

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
