const WhyChooseUsCard = ({ icon, title, description }) => {
  return (
    <div className="flex grow flex-col gap-3 items-center w-full md:w-[350px] p-8 bg-white shadow-md rounded-md">
      <div>{icon}</div>
      <h1 className="text-[var(--primary-color)] text-2xl font-medium">
        {title}
      </h1>
      <p className="text-center text-base">{description}</p>
    </div>
  );
};
export default WhyChooseUsCard;
