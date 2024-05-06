import { RadioButtonGroupProps } from "../../interfaces";
import Input from "./Input";
import Label from "./Label";

const RadioButtonGroup = ({
  name,
  options,
  register,
}: RadioButtonGroupProps) => {
  return (
    <div className="flex gap-4">
      {options.map((option, index) => (
        <div
          key={index}
          className="border flex flex-row-reverse items-center justify-center gap-2 rounded-[16px] py-4 px-6"
        >
          <Label
            htmlFor={option.value}
            className="font-sans text-2xl font-normal text-[#121212]"
          >
            {option.label}
          </Label>
          <Input
            register={register}
            type="radio"
            name={name}
            value={option.value}
            id={option.value}
            className=""
          />
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
