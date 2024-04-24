const DoYouHaveDoubtsCard = ({ title }) => {
  return (
    <section className="px-[3%] md:px-[6%] py-12 bg-white">
      <h1 className="text-3xl font-medium ">
        {title || 'Do you have doubts?'}
      </h1>
      <br />
      <p className="text-lg text-[#383838]">
        Our team is always at your service 24H
      </p>

      <div className="flex gap-12 flex-col md:flex-row my-8 items-center">
        <div className="flex w-full flex-col gap-2 grow">
          <label htmlFor="name" className="text-base text-[#383838]">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          />
        </div>
        <div className="flex w-full flex-col gap-2 grow">
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
        <div className="flex w-full flex-col gap-2 grow">
          <label htmlFor="phone" className="text-base text-[#383838]">
            Your phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          />
        </div>
        <div className="flex w-full flex-col gap-2 grow">
          <label htmlFor="subject" className="text-base text-[#383838]">
            Subject
          </label>
          <select
            name="subject"
            id="subject"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          >
            <option value=""></option>
            <option value="Unsuccessful Reservations">
              Unsuccessful Reservations
            </option>
            <option value="Card Payment Error">Card Payment Error</option>
            <option value="Unsuccessful Login">Unsuccessful Login</option>
            <option value="cancelled Reservation">cancelled Reservation</option>
            <option value="Other">Other</option>
          </select>
          {/* <input
            type="text"
            id="subject"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          /> */}
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
