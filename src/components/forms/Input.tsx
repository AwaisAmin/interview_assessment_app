import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<FieldValues>;
  type: string;
  name: string;
  value?: string;
  id: string;
  className?: string;
}

const Input = ({ register, type, name, value, id, className }: InputProps) => {
  return (
    <input
      {...register(name)}
      type={type}
      name={name}
      value={value}
      id={id}
      className={className}
    />
  );
};

export default Input;
