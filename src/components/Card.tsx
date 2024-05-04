import { CardProps } from "../interfaces";

const Card = ({ image, cardDescription, cardTitle }: CardProps) => {
  return (
    <>
      <section className="w-[254px] h-[300px] mb-10 rounded-[16px] border">
        <img src={image} alt="card-image" className="w-full rounded-t-[16px]" />
        <div className="flex flex-col px-2 py-5 gap-2 text-[#000000]">
          <h3 className="font-roboto text-xl font-medium">{cardTitle}</h3>
          <p className="font-roboto text-base font-normal">{cardDescription}</p>
        </div>
      </section>
    </>
  );
};

export default Card;
