import { RightArrow } from "../assets/icons";
import { StepperControlsProps } from "../interfaces";

const StepperControls = ({
  steps,
  currentStep,
  setCurrentStep,
  setCompleted,
}: StepperControlsProps) => {
  return (
    <div className="flex flex-col w-[308px] gap-[34px]">
      <button
        className="bg-[#0F1337] px-10 py-6 rounded-full"
        onClick={() => {
          currentStep === steps.length
            ? setCompleted(true)
            : setCurrentStep((prev) => prev + 1);
        }}
      >
        <span className="text-white font-roboto text-24 font-semibold">
          Continue to{" "}
          {currentStep === steps.length ? "Book task" : steps[currentStep]}
        </span>
      </button>
      <div className="flex justify-center items-center gap-1">
        <button className="font-montserrat text-18 font-bold text-[#0F1337]">
          Save for later
        </button>
        <RightArrow />
      </div>
    </div>
  );
};

export default StepperControls;
