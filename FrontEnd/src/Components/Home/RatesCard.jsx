import '../../../styles/RatesCard.css';
import { useTranslation } from 'react-i18next';

const RatesCard = ({ title, rate, label, trait1, trait2, trait3, trait4 }) => {
  const { t } = useTranslation();

  return (
    <div className="rates-card-container flex flex-col gap-2 justify-center items-center border-[1px] border-white hover:border-[var(--primary-color)] bg-white p-8 pt-0 rounded-md shadow-md">
      <div className="rates-card-star-img"></div>
      <h1 className="text-[#4B465C] text-2xl font-semibold">{title}</h1>
      <h1 className="text-[var(--primary-color)] text-3xl font-medium">
       From Euro <span className="font-semibold">{rate}</span>
      </h1>
      <p className="text-[#4b465c8e] text-sm font-medium">{label}</p>
      <table className="w-full text-[#4B465C] text-base mt-4">
        <tbody>
          <tr className="flex items-center">
            <td className="py-2 rate-check-img"></td>
            <td className="py-2 px-4 ml-0 mr-auto">{trait1}</td>
          </tr>
          <tr className="flex items-center">
            <td className="py-2 rate-check-img"></td>
            <td className="py-2 px-4 ml-0 mr-auto">{trait2}</td>
          </tr>
          <tr className="flex items-center">
            <td className="py-2 rate-check-img"></td>
            <td className="py-2 px-4 ml-0 mr-auto">{trait3}</td>
          </tr>
          <tr className="flex items-center">
            <td className="py-2 rate-check-img"></td>
            <td className="py-2 px-4 ml-0 mr-auto">{trait4}</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full mt-8 flex gap-4">
        <button className="rates-card-btn text-[var(--primary-color)] bg-[#CBA55729] grow rounded-lg px-4 py-2">
          {"Get Started"}
        </button>
      </div>
    </div>
  );
};

export default RatesCard;
