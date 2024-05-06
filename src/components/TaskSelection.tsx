import Accordian from "./Accordian";
import JobCategory from "./JobCategory";
import Service from "./Service";
import Task from "./Task";
import TaskDetail from "./TaskDetail";

const TaskSelection = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col gap-2 mb-10 ">
        <h1 className="font-roboto text-32 font-semibold">Task selection</h1>
        <p className="font-roboto text-24 font-normal">
          Select your desired category and service to find the right task you
          need done!
        </p>
      </div>
      <Accordian
        question="Job Category"
        fraction="1/4"
        answer={<JobCategory />}
      />
      <Accordian question="Service" fraction="2/4" answer={<Service />} />
      <Accordian question="Task" fraction="3/4" answer={<Task />} />
      <Accordian
        question="Task Details"
        fraction="4/4"
        answer={<TaskDetail />}
      />
    </section>
  );
};

export default TaskSelection;
