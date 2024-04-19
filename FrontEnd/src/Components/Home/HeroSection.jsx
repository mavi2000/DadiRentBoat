const HeroSection = () => {
  return (
    <section className="hero-bg flex items-center ">
      <div className="mx-[3%] md:mx-[6%]">
        <h1 className="text-[var(--primary-color)] text-[3rem] font-bold ">
          Boats and Dinghies Rental
        </h1>
        <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
          Get on board, an unforgettable day at sea awaits you thanks to DaDi
          rent boat and dinghy rental
        </p>
        <button className="text-white bg-[var(--primary-color)] rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3">
          Get Started
        </button>
      </div>
    </section>
  );
};
export default HeroSection;
