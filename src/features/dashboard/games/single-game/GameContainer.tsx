import { Game } from "../../../../api";
import { SingleField } from "./SingleField";

export const GameContainer = ({ game }: { game: Game }) => {
  return (
    <div className="w-full h-full border-2 border-red-500 grid grid-cols-3 gap-2">
      {game.board.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <SingleField
            key={`${rowIndex}-${colIndex}`}
            position={{ row: rowIndex, col: colIndex }}
            game={game}
          />
        )),
      )}
    </div>
  );
};
