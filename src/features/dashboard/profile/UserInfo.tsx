import { useAuthStore } from "../../auth/store";
import { InfoAnswer } from "../../../components/custom/InfoAnswer";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../../api";
import { queryKeys } from "../../../lib/react-query/queryKeys";
import { client } from "../../../lib/axios/client";
import { handleAxiosError } from "../../../helpers/handleAxiosError";

export const UserInfo = () => {
  const { user: reducedUser } = useAuthStore();

  const { data, error } = useQuery<User>({
    queryKey: [queryKeys.me],
    queryFn: async () => {
      const res = await client.get(`/users/${reducedUser?.id}`);
      return res.data;
    },
    enabled: Boolean(reducedUser?.id),
  });

  if (error) {
    handleAxiosError(error);
  }

  return (
    <div className="w-full h-full flex  p-16 ">
      <div className="w-[500px] h-[500px] bg-neutral-800 rounded-3xl p-4">
        <InfoAnswer info="Username" answer={data?.username} />
        <InfoAnswer info="Win Rate" answer={String(data?.win_rate)} />
        <InfoAnswer info="Game count" answer={String(data?.game_count)} />
      </div>
    </div>
  );
};
