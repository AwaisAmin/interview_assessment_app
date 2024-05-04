import { RightArrow } from "../assets/icons";
import { StepperControlsProps } from "../interfaces";

const StepperControls = ({
  steps,
  currentStep,
  setCurrentStep,
  setCompleted,
}: StepperControlsProps) => {
  const handleStepNavigation = () => {
    if (setCurrentStep) {
      if (currentStep === steps.length) {
        setCompleted && setCompleted(true);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-[34px] my-10">
      <button
        className="bg-[#0F1337] w-[308px]  px-10 py-6 rounded-full"
        onClick={handleStepNavigation}
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
