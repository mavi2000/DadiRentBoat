const BoatCard = () => {
  return (
    <section className="x-[3%] md:mx-[6%] flex flex-col md:flex-row gap-4 justify-between bg-white rounded-lg md:pr-6 shadow-lg">
      <div className="bg-[#CBA55726] w-full rounded-tl-lg rounded-bl-lg text-center">
        <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
          Far South
        </button>
        <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
          Standard / Standard Plus
        </button>
        <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
          The Great war
        </button>
        <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
          Into the Wild
        </button>
        <button className="block px-4 py-2 text-lg font-semibold active:bg-[var(--primary-color)] active:text-white hover:bg-[var(--primary-color)] hover:text-white w-full rounded-tl-lg rounded-bl-lg text-center">
          The Sea in your veins
        </button>
      </div>
      <div className="w-full my-4 px-4 md:px-0">
        <h1 className="text-lg font-medium text-center mb-4">
          Secche di Vada - Castiglioncello - Sonnino
        </h1>
        <table>
          <tr className="py-2 text-lg font-normal flex items-start">
            <td className=" pr-3 ">Duration:</td>
            <td className="text-[#676767]">Full Day</td>
          </tr>
          <tr className="py-2 text-lg font-normal flex flex-col md:flex-row items-start">
            <td className=" pr-3">Description:</td>
            <td className="text-[#676767]">
              A journey to the extreme south of our territory; after a
              suggestive swim 4 miles from the coast, under a lighthouse dating
              back to the late nineteenth century, we will guide you along the
              coast of Castiglioncello where there are wonderful villas
              overlooking the sea and where the water, so crystal clear, manages
              to reflect yourself.y
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};
export default BoatCard;
