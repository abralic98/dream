import { useQuery } from "@tanstack/react-query";
import { Game } from "../../../../api";
import { queryKeys } from "../../../../lib/react-query/queryKeys";
import { useIds } from "../../../../hooks/useIds";
import { client } from "../../../../lib/axios/client";
import { GameInfo } from "./GameInfo";
import { Loader2 } from "lucide-react";
import { GameContainer } from "./GameContainer";
import { handleAxiosError } from "../../../../helpers/handleAxiosError";

export const SingleGame = () => {
  const { gameId } = useIds();

  const { data, error, isLoading } = useQuery<Game>({
    queryKey: [queryKeys.singleGame, gameId],
    queryFn: async () => {
      const res = await client.get(`/games/${gameId}`);
      return res.data;
    },
    refetchInterval: 3000,
    enabled: Boolean(gameId),
  });

  if (error) {
    handleAxiosError(error);
    return <div className="text-red-500 text-xl font-bold">error</div>;
  }

  if (isLoading)
    return <Loader2 className="w-10 h-10 text-white animate-spin" />;

  if (!data) return <div>no data</div>;

  return (
    <div className="flex flex-col gap-4">
      <GameInfo game={data} />
      <GameContainer game={data} />
    </div>
  );
};
