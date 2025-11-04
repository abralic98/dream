import { Game } from "../../../../api";
import { H3 } from "../../../../components/Typography";
import { InfoAnswer } from "../../../../components/custom/InfoAnswer";

export const GameInfo = ({ game }: { game: Game }) => {
  return (
    <div className="border-2 border-red-500 flex flex-col gap-2 p-4">
      <H3> Game #{game?.id}</H3>
      <InfoAnswer info={"Status"} answer={game?.status} />
      <InfoAnswer
        info={"Winner"}
        answer={game?.winner?.username ?? "Not decided"}
      />
      <InfoAnswer info={"Date created"} answer={game?.created} />
      <InfoAnswer info={"First player"} answer={game?.first_player.username} />
      <InfoAnswer
        info={"Second player"}
        answer={game?.second_player?.username ?? "Missing"}
      />
    </div>
  );
};
