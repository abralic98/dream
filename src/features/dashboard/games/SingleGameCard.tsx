import { Game, StatusEnum } from "../../../api";
import { InfoAnswer } from "../../../components/custom/InfoAnswer";
import { JoinExistingGame } from "./JoinExistingGame";

export const SingleGameCard = ({ game }: { game: Game }) => {
  return (
    <div className="w-100 h-100 bg-neutral-800 text-white p-4 flex flex-col justify-between rounded-xl">
      <div className="flex flex-col gap-2">
        <InfoAnswer info={"# Number "} answer={String(game.id)} />
        <InfoAnswer info={"Status"} answer={game.status} />
        <InfoAnswer info={"Winner"} answer={game?.winner?.username} />
        <InfoAnswer info={"Date created"} answer={game.created} />
        <InfoAnswer info={"First player"} answer={game.first_player.username} />
        <InfoAnswer
          info={"Second player"}
          answer={game.second_player?.username ?? "null"}
        />
      </div>
      {/* Stavio bi i status progress ako neko izadje pa se oce vratit ali vracate da je popunjeno pa sam ostavio samo open*/}
      {game.status === StatusEnum.OPEN && <JoinExistingGame id={game.id} />}
    </div>
  );
};
