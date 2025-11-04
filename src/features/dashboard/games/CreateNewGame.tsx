import { useMutation } from "@tanstack/react-query";
import { PlusCircleIcon } from "lucide-react";
import { client } from "../../../lib/axios/client";
import { routes } from "../../../lib/routes";
import { handleAxiosError } from "../../../helpers/handleAxiosError";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../../lib/react-query/queryClient";
import { queryKeys } from "../../../lib/react-query/queryKeys";

export const CreateNewGame = () => {
  const navigate = useNavigate();

  const createGameMutation = useMutation({
    mutationFn: async () => {
      const res = await client.post(`/games/`);
      return res.data;
    },
    onSuccess: (res) => {
      queryClient.refetchQueries({
        queryKey: [queryKeys.games],
      });
      navigate(`${routes.game.route}/${res.id}`);
    },
    onError: (error) => {
      handleAxiosError(error);
    },
  });
  return (
    <div
      onClick={() => createGameMutation.mutateAsync()}
      className="w-full bg-neutral-900 p-4 text-white font-bold text-xl rounded-lg hover:bg-neutral-700 flex flex-row gap-4 items-center cursor-pointer"
    >
      <PlusCircleIcon className="w-8 h-8" />
      New Game
    </div>
  );
};
