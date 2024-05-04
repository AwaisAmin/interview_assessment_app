import React, { useState } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../assets/icons/RightArrow";

const Stepper = () => {
  const steps = ["Select Task", "Schedule", "Cart", "Confirm"];
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div className="flex">
        {steps?.map((step, i) => (
          <div key={i} className="step_item">
            <div className="step">{i + 1}</div>
            <p className="font-open-sans text-16 font-semibold leading-24 text-center text-[#212121]">
              {step}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[308px] gap-[24px]">
        <button className="bg-[#0F1337] px-10 py-6 rounded-full">
          <span className="text-white font-roboto text-24 font-semibold">
            Continue to {"schedule"}
          </span>
        </button>
        <div className="flex justify-center items-center gap-1">
          <button className="font-montserrat text-18 font-bold text-[#0F1337]">
            Save for later
          </button>
          <RightArrow />
        </div>
      </div>
    </>
  );
};

export default Stepper;
