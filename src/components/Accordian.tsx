import { Disclosure } from "@headlessui/react";
import { ChevronRight } from "../assets/icons";
import { disclosures } from "../constants";

const Accordian = () => {
  return (
    <section className="flex flex-col gap-10">
      {disclosures.map((disclosure, index) => (
        <div
          key={index}
          className="w-full rounded-[12px] border bg-inherit p-2"
        >
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-sm font-medium">
                  <div className="flex items-center ">
                    <span className="font-roboto text-24 font-semibold">
                      {disclosure.question}
                    </span>
                    <ChevronRight
                      className={`${open ? "rotate-90 transform" : ""}`}
                    />
                  </div>
                  <h2 className="font-roboto text-24 font-semibold">
                    {disclosure.fraction}
                  </h2>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  {disclosure.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </section>
  );
};

export default Accordian;
