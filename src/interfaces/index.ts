export interface StepperControlsProps {
  steps: string[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}
