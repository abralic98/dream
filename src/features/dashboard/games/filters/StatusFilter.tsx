import { StatusEnum } from "../../../../api";
import { FormSelect } from "../../../../components/form/FormSelect";

export const StatusFilter = () => {
  return (
    <>
      <FormSelect
        name="status"
        label="Status"
        options={[
          { label: "All", value: "All" },
          { label: "Open", value: StatusEnum.OPEN },
          { label: "Finished", value: StatusEnum.FINISHED },
          { label: "Progress", value: StatusEnum.PROGRESS },
        ]}
      />
    </>
  );
};
