import { useState } from "react";
import { Stepper, StepperControls, TaskSelection } from "../components";

const Home = () => {
  const steps = ["Select Task", "Schedule", "Cart", "Confirm"];
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);

  return (
    <section className="px-20">
      <Stepper steps={steps} currentStep={currentStep} completed={completed} />
      <TaskSelection />
      <StepperControls
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        setCompleted={setCompleted}
      />
    </section>
  );
};

export default Home;
