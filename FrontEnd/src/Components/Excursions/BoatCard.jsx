import { Link } from 'react-router-dom';

const BoatCard = ({ title, duration, description }) => {
  return (
    <section className="x-[3%] md:mx-[6%] flex flex-col md:flex-row gap-4 justify-between bg-white rounded-lg md:pr-6 shadow-lg">
      <div className="bg-[#CBA55726] w-full rounded-tl-lg rounded-bl-lg text-center">
        <Link to="/Excursions">
          <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
            Far South
          </button>
        </Link>
        <Link to="/Standard-Plus">
          <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
            Standard / Standard Plus
          </button>
        </Link>
        <Link to="/The-Great-War">
          <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
            The Great war
          </button>
        </Link>
        <Link to="/StandardPlus">
          <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
            Into the Wild
          </button>
        </Link>
        <Link to="/StandardPlus">
          <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
            The Sea in your veins
          </button>
        </Link>
      </div>
      <div className="w-full my-4 px-4 md:px-0">
        <h1 className="text-lg font-medium text-center mb-4">{title}</h1>
        <table>
          <tr className="py-2 text-lg font-normal flex items-start">
            <td className=" pr-3 ">Duration:</td>
            <td className="text-[#676767]">{duration}</td>
          </tr>
          <tr className="py-2 text-lg font-normal flex flex-col md:flex-row items-start">
            <td className=" pr-3">Description:</td>
            <td className="text-[#676767]">{description}</td>
          </tr>
        </table>
      </div>
    </section>
  );
};
export default BoatCard;
