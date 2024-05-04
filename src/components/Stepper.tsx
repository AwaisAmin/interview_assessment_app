import { StepperControlsProps } from "../interfaces";

const Stepper = ({ steps, currentStep, completed }: StepperControlsProps) => {
  return (
    <>
      <h1 className="font-roboto text-24 font-semibold text-center py-7">
        Project progress
      </h1>
      <div className="flex justify-center">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step_item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || completed) && "complete"
            }`}
          >
            <div className="step"></div>
            <p className="font-open-sans text-16 font-semibold leading-24 text-center text-[#212121]">
              {step}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
