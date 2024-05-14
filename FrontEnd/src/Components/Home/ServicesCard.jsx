import '../../../styles/ServicesCard.css';

const ServicesCard = ({ frontIcon, title, backIcon, description }) => {
  return (
    <div className="flip-box rounded">
      <div className="flip-box-inner rounded">
        <div className="flip-box-front flex flex-col  items-center justify-center rounded">
          <img src={frontIcon} alt="Umbrella" className="w-20 mb-5" />
          <h1 className="text-[var(--primary-color)] font-semibold text-3xl">
            {title}
          </h1>
        </div>
        <div className="flip-box-back rounded p-4 pt-0">
          <img src={backIcon} alt="Umbrella" className="w-16 ml-auto mr-8" />
          <h1 className="text-2xl font-medium mt-2">{title}</h1>
          <p className="font-normal mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
