import { useMutation } from "@tanstack/react-query";
import { H4 } from "../../../components/Typography";
import { Button } from "../../../components/ui/button";
import { client } from "../../../lib/axios/client";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../lib/routes";
import { handleAxiosError } from "../../../helpers/handleAxiosError";
import { Game } from "../../../api";
import { queryClient } from "../../../lib/react-query/queryClient";
import { queryKeys } from "../../../lib/react-query/queryKeys";

export const JoinExistingGame = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const joinGameMutation = useMutation({
    mutationFn: async () => {
      const res: Game = await client.post(`/games/${id}/join/`);

      return res;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [queryKeys.games],
      });
      navigate(`${routes.game.route}/${id}`);
    },
    onError: (error) => {
      handleAxiosError(error);
    },
  });

  return (
    <Button type="button" onClick={() => joinGameMutation.mutateAsync()}>
      <H4>Join </H4>
    </Button>
  );
};
