interface LabelProps {
  htmlFor: string;
  className?: string;
  children?: React.ReactNode;
}

const Label = ({ htmlFor, children, className }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
