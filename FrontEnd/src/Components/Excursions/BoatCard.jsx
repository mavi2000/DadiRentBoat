import { Link } from 'react-router-dom';

const BoatCard = ({ title, duration, description }) => {
  return (
    <section className="x-[3%] md:mx-[6%] flex flex-col md:flex-row gap-4 justify-between bg-white rounded-lg md:pr-6 shadow-lg">
      <div className="bg-[#CBA55726] flex flex-col justify-evenly grow md:w-1/2 rounded-tl-lg rounded-bl-lg text-center">
        <Link to="/services/Excursions">
          <button
            className={`block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center ${
              window.location.pathname.includes('/services/Excursions')
                ? 'text-white bg-[var(--primary-color)]'
                : ''
            } `}
          >
            Far South
          </button>
        </Link>
        <Link to="/services/Standard-Plus">
          <button
            className={`block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center ${
              window.location.pathname.includes('/services/Standard-Plus')
                ? 'text-white bg-[var(--primary-color)]'
                : ''
            } `}
          >
            Standard / Standard Plus
          </button>
        </Link>
        <Link to="/services/The-Great-War">
          <button
            className={`block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center ${
              window.location.pathname.includes('/services/The-Great-War')
                ? 'text-white bg-[var(--primary-color)]'
                : ''
            } `}
          >
            The Great war
          </button>
        </Link>
        <Link to="/services/Into-The-Wild">
          <button
            className={`block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center ${
              window.location.pathname.includes('/services/Into-The-Wild')
                ? 'text-white bg-[var(--primary-color)]'
                : ''
            } `}
          >
            Into the Wild
          </button>
        </Link>
        <Link to="/services/The-Sea-In-Your-Veins">
          <button
            className={`block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center ${
              window.location.pathname.includes(
                '/services/The-Sea-In-Your-Veins'
              )
                ? 'text-white bg-[var(--primary-color)]'
                : ''
            } `}
          >
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
