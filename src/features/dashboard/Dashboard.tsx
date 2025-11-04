import { FormProvider, useForm } from "react-hook-form";
import { GameList } from "./games/GameList";
import { Filters } from "./games/Filters";

export const Dashboard = () => {
  const form = useForm();
  return (
    <div>
      <FormProvider {...form}>
        <Filters />
        <GameList />
      </FormProvider>
    </div>
  );
};
