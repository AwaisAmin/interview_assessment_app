import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  className: string;
}

const TextArea = ({ name, className, ...rest }: TextAreaProps) => {
  return (
    <textarea
      {...rest}
      name={name}
      className={className}
      style={{ padding: "1rem" }}
    />
  );
};

export default TextArea;
