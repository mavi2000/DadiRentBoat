import React from 'react'

const ReuseCard = ({
    heading,
    para1,
    para2,
    para3,
    image

}) => {
  return (
<section className="mx-[3%] md:mx-[6%] mt-12 flex gap-6 flex-col md:flex-row justify-center items-center">
      <div>
        <h1 className="text-3xl font-medium w-[90%]">{heading}</h1>
        <br />
        <p className="text-[#676767] text-lg w-[90%]">
        {para1}
        </p>
        <p className="text-[#676767] text-lg w-[90%]">
        {para2}
        </p>
        <p className="text-[#676767] text-lg w-[90%]">
        {para3}
        </p>
        <br />
        <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
          Book Now
        </button>
      </div>
      <img
        src={image}
        alt="boat"
        className="w-full h-auto md:w-full ml-auto mr-0"
      />
    </section>
  )
}

export default ReuseCard
