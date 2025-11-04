import toast from "react-hot-toast";

interface AxiosErr {
  message?: string;
  response?: any;
}

export const handleAxiosError = (error: unknown) => {
  const err = error as AxiosErr;
  console.log(err);
  try {
    const message =
      err?.response?.data.errors[0]?.message ||
      err?.message ||
      "An unknown error occurred";

    toast.error(message);
  } catch {}
};
