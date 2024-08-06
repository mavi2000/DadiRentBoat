import { Link } from 'react-router-dom';
import ExcursionImg from '../../assets/Images/Excursion-img.webp';

const ExcursionCard = ({ title, img, p1, p2, p3, description }) => {
  return (
    <section className="mx-[3%] md:mx-[6%] mt-12 flex gap-6 flex-col md:flex-row justify-center items-center">
      <div>
        <h1 className="text-3xl font-medium">{title || 'Excursion'}</h1>
        <br />
        <div className="text-[#676767] text-lg">{description}</div>
        <p className="text-[#676767] text-lg">{p1}</p>
        <p className="text-[#676767] text-lg">{p2}</p>
        <p className="text-[#676767] text-lg">{p3}</p>
        <br />
        <Link to="/Our-Fleet">
          <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
            Book Now
          </button>
        </Link>
      </div>
      <img
        src={img || ExcursionImg}
        alt="boat"
        className="w-full h-auto md:w-1/2 ml-auto mr-0"
      />
    </section>
  );
};
export default ExcursionCard;
