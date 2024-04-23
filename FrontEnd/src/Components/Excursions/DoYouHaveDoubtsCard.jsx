const DoYouHaveDoubtsCard = () => {
  return (
    <section className="mx-[3%] md:mx-[6%] my-12">
      <h1 className="text-3xl font-medium ">Do you have doubts?</h1>
      <br />
      <p className="text-lg text-[#383838]">
        Our team is always at your service 24H
      </p>

      <div className="flex gap-12 flex-col md:flex-row my-8 items-center">
        <div className="flex flex-col gap-2 grow">
          <label htmlFor="name" className="text-base text-[#383838]">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          />
        </div>
        <div className="flex flex-col gap-2 grow">
          <label htmlFor="email" className="text-base text-[#383838]">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          />
        </div>
      </div>
      <div className="flex gap-12 flex-col md:flex-row my-8 items-center">
        <div className="flex flex-col gap-2 grow">
          <label htmlFor="phone" className="text-base text-[#383838]">
            Your phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          />
        </div>
        <div className="flex flex-col gap-2 grow">
          <label htmlFor="subject" className="text-base text-[#383838]">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 grow">
        <label htmlFor="message" className="text-base text-[#383838]">
          Your message (optional)
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2 resize-none"
        ></textarea>
      </div>
      <br />
      <br />
      <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2 ">
        Send
      </button>
    </section>
  );
};
export default DoYouHaveDoubtsCard;
