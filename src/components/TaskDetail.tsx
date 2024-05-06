import { useForm } from "react-hook-form";
import { Input, Label, RadioButtonGroup, TextArea, Dragable } from "./forms";
import { Upload } from "../assets/icons";

const TaskDetail = () => {
  const { register, handleSubmit } = useForm();
  return (
    <section>
      <form
        onSubmit={handleSubmit(() => console.log("submit..."))}
        className=""
      >
        <div className="flex flex-col gap-4 pb-5">
          {[1, 2, 3].map((questionNumber) => (
            <div key={questionNumber} className="flex items-center gap-3">
              <h4 className="font-roboto text-2xl font-medium text-black">
                Question {questionNumber}:
              </h4>
              <RadioButtonGroup
                name={`question${questionNumber}`}
                register={register}
                options={[
                  { label: "Yes", value: `yes${questionNumber}` },
                  { label: "No", value: `no${questionNumber}` },
                ]}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 py-3">
          <h4 className="text-[#121212] font-roboto text-base font-semibold">
            Note
          </h4>
          <TextArea
            {...register("note")}
            placeholder="Describe the problem, the size, dimensions etc"
            className="w-full h-[144px] border border-[#C4C4C4] rounded-[3px] resize-none placeholder-gray-400  placeholder:font-open-sans placeholder:text-sm placeholder:font-normal  outline-none"
            style={{ padding: "1rem" }}
          />
        </div>
        <div className="flex flex-col gap-4 py-3">
          <h4 className="text-[#121212] font-roboto text-base font-semibold">
            Attach an image
          </h4>
          <div className="w-full h-[230px] flex flex-col justify-center items-center gap-5 border-dashed border-[3px] bg-[#FAFAFB] rounded-[12px]">
            <Upload />
            <Dragable />
            <Label
              htmlFor="file"
              className="text-[#0F1337] font-open-sans text-sm font-normal border-b-2"
            >
              Or Browse
            </Label>
            <Input
              register={register}
              type="file"
              name="file"
              id="file"
              className="hidden"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4">
          <h2 className="font-roboto text-3xl font-medium text-black">
            Price:
          </h2>
          <p className="font-roboto text-3xl font-normal">N/A</p>
        </div>
      </form>
    </section>
  );
};

export default TaskDetail;
