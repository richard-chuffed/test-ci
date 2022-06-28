import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";
import FormRow from "../Components/Form/FormRow";
import TextInput from "../Components/Form/TextInput";

const Perk = () => {
  const schema = yup.object().shape({
    perk: yup.string().required(),
  });

  const { register } = useFormContext({
      resolver: yupResolver(schema)
  });
  return (
    <FormRow>
      I AM PERK!
      <TextInput classes={"my-2"} placeholder="Perk" {...register("perks[0]")} name="perks[0]"/>
    </FormRow>
  );
};

export default Perk;
