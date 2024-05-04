import { Bag } from "../assets/icons";
import { jobCategories } from "../constants";

const JobCategory = () => {
  return (
    <section className="flex flex-wrap gap-4">
      {jobCategories.map((category, index) => (
        <div
          key={index}
          className="py-4 px-6 rounded-[16px] border w-[224px] h-[56px] flex items-center justify-center gap-4"
        >
          <Bag />
          <h2 className="font-roboto text-base font-medium">{category}</h2>
        </div>
      ))}
    </section>
  );
};

export default JobCategory;
