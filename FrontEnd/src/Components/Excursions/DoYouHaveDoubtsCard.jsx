import React from 'react';
import { useTranslation } from 'react-i18next';

const DoYouHaveDoubtsCard = ({ title }) => {
  const { t } = useTranslation();

  return (
    <section className="px-[3%] md:px-[6%] py-12 bg-white">
      <h1 className="text-3xl font-medium ">
        {title || t('doYouHaveDoubts')}
      </h1>
      <br />
      <p className="text-lg text-[#383838]">
        {t('ourTeamService')}
      </p>

      <div className="flex gap-12 flex-col md:flex-row my-8 items-center">
        <div className="flex w-full flex-col gap-2 grow">
          <label htmlFor="name" className="text-base text-[#383838]">
            {t('yourName')}
          </label>
          <input
            type="text"
            id="name"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          />
        </div>
        <div className="flex w-full flex-col gap-2 grow">
          <label htmlFor="email" className="text-base text-[#383838]">
            {t('yourEmail')}
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
            {t('yourPhoneNumber')}
          </label>
          <input
            type="tel"
            id="phone"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          />
        </div>
        <div className="flex w-full flex-col gap-2 grow">
          <label htmlFor="subject" className="text-base text-[#383838]">
            {t('subject')}
          </label>
          <select
            name="subject"
            id="subject"
            className="rounded bg-[#CBA55714] outline-none w-full border-[1px] border-[#E8E8E8] p-2"
          >
            <option value=""></option>
            <option value="Unsuccessful Reservations">
              {t('unsuccessfulReservations')}
            </option>
            <option value="Card Payment Error">
              {t('cardPaymentError')}
            </option>
            <option value="Unsuccessful Login">
              {t('unsuccessfulLogin')}
            </option>
            <option value="Cancelled Reservation">
              {t('cancelledReservation')}
            </option>
            <option value="Other">{t('other')}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2 grow">
        <label htmlFor="message" className="text-base text-[#383838]">
          {t('yourMessage')}
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
        {t('send')}
      </button>
    </section>
  );
};

export default DoYouHaveDoubtsCard;
