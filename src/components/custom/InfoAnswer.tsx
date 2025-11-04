import { H4 } from "../Typography";

interface Props {
  info: string;
  answer: string | null;
}
export const InfoAnswer = ({ info, answer }: Props) => {
  return (
    <div className="flex flex-row gap-4">
      <H4 className="font-bold">{info} :</H4>
      <H4>{answer ?? "null"}</H4>
    </div>
  );
};
