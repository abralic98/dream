import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../../../components/form/FormInput";
import { H2 } from "../../../components/Typography";
import { Button } from "../../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../zod";
import { publicClient } from "../../../lib/axios/client";
import { RegisterInput } from "../../../api";
import { useMutation } from "@tanstack/react-query";
import { handleAxiosError } from "../../../helpers/handleAxiosError";
import { routes } from "../../../lib/routes";

export const Register = () => {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterInput) => {
      const res = await publicClient.post("/register/", data);
      return res;
    },
    onSuccess: () => {
      navigate(routes.login.route);
    },
    onError: (error) => {
      handleAxiosError(error);
    },
  });

  const submit = (data: RegisterInput) => {
    registerMutation.mutateAsync(data);
  };

  return (
    <div className="bg-neutral-900 w-[500px] p-8 rounded-3xl">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <div className="flex flex-col gap-4">
            <H2>Register</H2>
            <FormInput<RegisterInput>
              error={form.formState.errors["username"]}
              name="username"
              label="Username"
            />
            <FormInput<RegisterInput>
              name="password"
              label="Password"
              error={form.formState.errors["password"]}
              secure
            />
            <Link className="text-white" to={routes.login.route}>
              allready have account login
            </Link>
            <Button>Register</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
