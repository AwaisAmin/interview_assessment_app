import { ReactNode } from "react";

export interface StepperControlsProps {
  steps: string[];
  currentStep: number;
  setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
  setCompleted?: React.Dispatch<React.SetStateAction<boolean>>;
  completed?: boolean;
}

export interface AccordianProps {
  question: string;
  fraction: string;
  answer: ReactNode;
}

export interface CardProps {
  image: string;
  cardDescription: string;
  cardTitle: string;
}

export interface MenuItem {
  text: string;
  href: string;
}

export type FooterLinkText = string;

export type JobCategory = string;
