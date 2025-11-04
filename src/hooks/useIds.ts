import { useParams } from "react-router-dom";

export const useIds = () => {
  const params = useParams();

  const gameId = params.gameId as string | undefined;

  return { gameId };
};
