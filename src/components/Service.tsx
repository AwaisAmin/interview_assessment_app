import Card from "./Card";
import CardImage1 from "../assets/cardImage1.png";
import CardImage2 from "../assets/cardImage2.png";

const Service = () => {
  return (
    <section className="flex flex-wrap gap-[32px]">
      <Card
        image={CardImage1}
        cardTitle="Painting"
        cardDescription="Select your desired category and service to find the right task you need done! "
      />
      <Card
        image={CardImage2}
        cardTitle="Dry wall repair"
        cardDescription="Select your desired category and service to find the right task you need done! "
      />
    </section>
  );
};

export default Service;
