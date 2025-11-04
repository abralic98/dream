import { useIds } from "../../../../hooks/useIds";
import { client } from "../../../../lib/axios/client";
import { useMutation } from "@tanstack/react-query";
import { handleAxiosError } from "../../../../helpers/handleAxiosError";
import { H1 } from "../../../../components/Typography";
import { Game, MakeMove } from "../../../../api";
import { queryClient } from "../../../../lib/react-query/queryClient";
import { queryKeys } from "../../../../lib/react-query/queryKeys";

export const SingleField = ({
  position,
  game,
}: {
  position: MakeMove;
  game: Game;
}) => {
  const { gameId } = useIds();

  const playerId = game?.board[position.row][position.col];

  let simbol: string | null = null;
  if (playerId === game?.first_player?.id) simbol = "X";
  if (playerId === game?.second_player?.id) simbol = "O";

  const moveMutation = useMutation({
    mutationFn: async () => {
      const res = await client.post(`/games/${gameId}/move/`, position);
      return res;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [queryKeys.singleGame, gameId],
      });
    },
    onError: (error) => {
      handleAxiosError(error);
    },
  });

  const move = () => {
    // if (playerId !== null) return; // moja provjera ali neka backend daje poruke
    moveMutation.mutateAsync();
  };

  return (
    <div
      onClick={move}
      className="w-full h-[200px] bg-neutral-600 cursor-pointer hover:bg-neutral-500 flex items-center justify-center"
    >
      <H1 className="text-[80px]">{simbol || ""}</H1>
    </div>
  );
};
