import Card from "./Card";
import CardImage3 from "../assets/cardImage4.png";
import CardImage4 from "../assets/cardImage4.png";
import CardImage5 from "../assets/cardImage5.png";

const Task = () => {
  return (
    <section className="flex flex-wrap gap-[32px]">
      <Card
        image={CardImage3}
        cardTitle="Paint Patched Area"
        cardDescription="Select your desired category and service to find the right task you need done! "
      />
      <Card
        image={CardImage4}
        cardTitle="Paint Room"
        cardDescription="Select your desired category and service to find the right task you need done! "
      />
      <Card
        image={CardImage5}
        cardTitle="DPaint Wall Section"
        cardDescription="Select your desired category and service to find the right task you need done! "
      />
    </section>
  );
};

export default Task;
