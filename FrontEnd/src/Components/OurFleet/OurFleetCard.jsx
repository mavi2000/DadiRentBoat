import { FaLocationDot } from 'react-icons/fa6';

const OurFleetCard = () => {
  return (
    <section>
      <img src="" alt="" />
      <div className="rounded-md shadow-xl p-4 bg-white">
        <p className="text-[#00000080] text-xs flex gap-2 items-center mb-4">
          <FaLocationDot size={20} className="text-[#00000049]" /> PRAIA DE LEÇA
          DA PALMEIRA
        </p>
        <h1 className="text-xl font-semibold">Bavaria 50 Cruiser</h1>
      </div>
    </section>
  );
};
export default OurFleetCard;
