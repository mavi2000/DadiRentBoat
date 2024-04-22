import ExcursionImg from '../../assets/Images/Excursion-img.png';

const ExcursionCard = ({ p1, p2, p3 }) => {
  return (
    <section className="mx-[3%] md:mx-[6%] mt-12 flex gap-6 flex-col md:flex-row justify-center items-center">
      <div>
        <h1 className="text-3xl font-medium">Excursion</h1>
        <br />
        <p className="text-[#676767] text-lg">{p1}</p>
        <p className="text-[#676767] text-lg">{p2}</p>
        <p className="text-[#676767] text-lg">{p3}</p>
        <br />
        <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
          Book Now
        </button>
      </div>
      <img
        src={ExcursionImg}
        alt="boat"
        className="w-full h-auto md:w-1/2 ml-auto mr-0"
      />
    </section>
  );
};
export default ExcursionCard;
