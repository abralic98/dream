import { useMutation } from "@tanstack/react-query";
import { SingleRoute } from "../../../components/sidebar/SingleRoute";
import { handleAxiosError } from "../../../helpers/handleAxiosError";
import { client } from "../../../lib/axios/client";
import { useAuthStore } from "../store";
import { queryClient } from "../../../lib/react-query/queryClient";

export const Logout = () => {
  const { clearAuth } = useAuthStore();

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await client.post("/logout/");
      return res;
    },
    onSuccess: () => {
      clearAuth();
      queryClient.clear();
    },
    onError: (error) => {
      handleAxiosError(error);
    },
  });

  return (
    <SingleRoute
      action={() => logoutMutation.mutateAsync()}
      className="hover:bg-red-900"
      route={{ route: "/auth/login", name: "Logout" }}
    />
  );
};
