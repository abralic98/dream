import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../../../components/form/FormInput";
import { H2 } from "../../../components/Typography";
import { Button } from "../../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../zod";
import { publicClient } from "../../../lib/axios/client";
import { LoginInput, LoginOutput } from "../../../api";
import { useMutation } from "@tanstack/react-query";
import { handleAxiosError } from "../../../helpers/handleAxiosError";
import Cookies from "js-cookie";
import { CookieKeys } from "../../../helpers/cookies";
import { useAuthStore } from "../store";
import { routes } from "../../../lib/routes";

export const Login = () => {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const { setAuth } = useAuthStore();

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data: LoginInput) => {
      const res = await publicClient.post("/login/", data);
      return res.data;
    },
    onSuccess: (res: LoginOutput) => {
      Cookies.set(CookieKeys.TOKEN, res.token);
      const stringifiedUser = JSON.stringify({
        username: res.username,
        id: res.id,
      });
      Cookies.set(CookieKeys.USER, stringifiedUser); // inace ne spremam usera u cookie ali posto nema getMe spremam ovako da ne izbacuje na svakom refreshu
      setAuth(res.token, { username: res.username, id: res.id });
      navigate(routes.dashboard.route);
    },
    onError: (error) => {
      handleAxiosError(error);
    },
  });

  const submit = (data: LoginInput) => {
    loginMutation.mutateAsync(data);
  };

  return (
    <div className="bg-neutral-900 w-[500px] p-8 rounded-3xl">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <div className="flex flex-col gap-4">
            <H2>Login</H2>
            <FormInput<LoginInput>
              error={form.formState.errors["username"]}
              name="username"
              label="Username"
            />
            <FormInput<LoginInput>
              name="password"
              label="Password"
              error={form.formState.errors["password"]}
              secure
            />
            <Link className="text-white" to={routes.register.route}>
              don't have account register here
            </Link>
            <Button isLoading={loginMutation.isPending}>Login</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
