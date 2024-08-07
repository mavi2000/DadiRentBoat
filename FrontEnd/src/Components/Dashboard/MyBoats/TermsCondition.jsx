import React, { useContext, useState } from 'react';
import { MdElectricBolt } from "react-icons/md";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { AdminContext } from '../../../../Context/AdminContext';
import BoatsNavbar from "./BoatsNavbar";
import { useTranslation } from 'react-i18next';

const listPoints = [
  "Instant bookings are automatically approved: no more actions needed on your part to validate a rental.",
  "Users will still be able to send you classic contact requests",
  "Your listing will be highlighted and better ranked in our search engine"
];

const howWorks = [
  { heading: "Boost your listing!", text: "Once the instant booking is activated, your listing is immediately highlighted on our search engine." },
  { heading: "The renter makes a request", text: "The renter pays and it is automatically accepted. No action is required on your part!" },
  { heading: "The renter pays the request" },
  { heading: "The rental is validated", text: "You receive the renter's contact information to organize the rental" },
];

const noticeOptions = ["The same day", "1 day", "2 days", "3 days", "1 week"];
const cancellationPolicy = [
  { heading: "Flexible", text: "The renter will be refunded the full amount of the rental until the day before departure (excluding SamBoat service charges)." },
  { heading: "Zen", text: "If the renter cancels up to 5 days before the start of the rental, you will receive 30% of the rental amount, minus the SamBoat service fee. If they cancel less than 5 days before the start of the rental, you will receive 100% of your rental income." },
  { heading: "Moderate", text: "If the renter cancels more than 2 weeks before the start of the rental, you will receive 50% of the rental amount deducted from the SamBoat service fee. If they cancel less than 2 weeks before the start of the rental period, you will receive 100% of your rental income." },
  { heading: "Strict", text: "No refund possible, except for a special weather alert." },
  { heading: "Personalized", text: "Propose your own cancellation conditions." }
];

const TermsCondition = () => {
  const { t } = useTranslation();
  const { addTermAndCondition } = useContext(AdminContext);
  const [isActive, setIsActive] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [notice, setNotice] = useState(noticeOptions[0]);
  const [rentalDisembarkMorning, setRentalDisembarkMorning] = useState(false);
  const [rentalEmbarkEvening, setRentalEmbarkEvening] = useState(false);
  const [allowPets, setAllowPets] = useState(false);
  const [preBookingMessage, setPreBookingMessage] = useState("");
  const [selectedCancellationPolicy, setSelectedCancellationPolicy] = useState('');
  const [personalizedPolicy, setPersonalizedPolicy] = useState('');
  const [applyToFleet, setApplyToFleet] = useState(false);

  const handleSave = () => {
    const formData = {
      isActive,
      notice,
      rentalDisembarkMorning,
      rentalEmbarkEvening,
      allowPets,
      preBookingMessage,
      selectedCancellationPolicy,
      personalizedPolicy,
      applyToFleet
    };
    addTermAndCondition({ ...formData, boatId: "60d5ec49e7b4f0b5a8d0c5a4" })
  };

  return (
    <section className=''>
      <BoatsNavbar />
      <div className='shadow-lg rounded-md mb-6 p-4 bg-[#dbb666] mt-10'>
        <article className='rounded-md flex items-center justify-between gap-3'>
          <MdElectricBolt size={30} className='font-semibold' />
          <div className='flex-1'>
            <h1 className='text-xl font-semibold'>{t('TermsConditionInstantBooking')}</h1>
            <p className='font-[200] -mt-1 text-sm'>{t('TermsConditionIncreaseIncome')}</p>
          </div>
        </article>
        <ul className='list-disc mt-4 mb-10 flex flex-col gap-3 list-inside'>
          {listPoints.map((point, i) => <li className='font-[200] -mt-1 text-sm' key={i}>{t(`TermsConditionListPoints${i + 1}`)}</li>)}
        </ul>
        <p className='flex items-center gap-4'>
          <ToggleButton isToggled={isActive} setIsToggled={setIsActive} />
          {isActive ? t('TermsConditionDeactivate') : t('TermsConditionActivate')}
        </p>
        {showMore ? (
          <p onClick={() => setShowMore(!showMore)} className='flex items-center gap-4 mt-10 cursor-pointer'>
            <FaChevronUp /> <span>{t('TermsConditionShowLess')}</span>
          </p>
        ) : (
          <p onClick={() => setShowMore(!showMore)} className='flex items-center gap-4 mt-10 cursor-pointer'>
            <FaChevronDown /> <span>{t('TermsConditionLearnMore')}</span>
          </p>
        )}
        {showMore && (
          <>
            <h1 className='text-2xl font-bold mt-2 mb-4'>{t('TermsConditionHowItWorks')}</h1>
            {howWorks.map((item, i) => (
              <article key={i}>
                <h1 className='text-sm font-semibold'>{i + 1}.{t(`TermsConditionHowWorksHeading${i + 1}`)}</h1>
                {item.text && <p className='font-[200] text-sm my-1'>{t(`TermsConditionHowWorksText${i + 1}`)}</p>}
              </article>
            ))}
          </>
        )}
      </div>
      <div className='shadow-lg bg-white rounded-md p-4'>
        <article>
          <h1 className='text-xl font-semibold'>{t('TermsConditionConditions')}</h1>
          <h1 className='text-xl font-semibold mt-8'>{t('TermsConditionAdvanceNotice')}</h1>
          <p className='my-4 text-sm font-lighter'>{t('TermsConditionNoticeMessage')}</p>
          <select
            className='w-full p-2 bg-white outline-none border rounded-md'
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
          >
            {noticeOptions.map((item, i) => <option key={i} value={item}>{t(`TermsConditionNoticeOption${i + 1}`)}</option>)}
          </select>
          <h1 className='text-xl font-semibold mt-8'>{t('TermsConditionMinimumRentalDuration')}</h1>
          <p className='my-4 text-sm font-lighter'>{t('TermsConditionMinimumRentalDurationMessage')}</p>
          <h1 className='text-xl font-semibold mt-8'>{t('TermsConditionRentalConditionsMoreThan2Days')}</h1>
          <div className='my-4'>
            <label className='my-20'>
              <input
                type="checkbox"
                checked={rentalDisembarkMorning}
                onChange={(e) => setRentalDisembarkMorning(e.target.checked)}
              />
              <span className='ms-2 font-lighter'>
                {t('TermsConditionAcceptDisembarkMorning')}
              </span>
            </label> <br />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={rentalEmbarkEvening}
                onChange={(e) => setRentalEmbarkEvening(e.target.checked)}
              />
              <span className='ms-2 font-lighter'>
                {t('TermsConditionAcceptEmbarkEvening')}
              </span>
            </label>
          </div>
          <h1 className='text-xl font-semibold mt-8'>{t('TermsConditionPreference')}</h1>
          <div className='flex items-center gap-20'>
            <p className='my-4 text-sm font-lighter'>{t('TermsConditionPetsAllowed')}</p>
            <ToggleButton isToggled={allowPets} setIsToggled={setAllowPets} />
          </div>
          {allowPets && (
            <p className='text-sm font-lighter text-green-600 mt-2'>{t('Your Four Legged Friends Allowed')}</p>
          )}
          <h1 className='text-xl font-semibold mt-8'>{t('TermsConditionPreBookingMessage')}</h1>
          <p className='my-2 text-sm font-lighter'>{t('TermsConditionPreBookingMessageInfo')}</p>
          <textarea
            value={preBookingMessage}
            rows={10}
            onChange={(e) => setPreBookingMessage(e.target.value)}
            className='w-full outline-none border rounded-md p-2'
          ></textarea>
          <h1 className='text-xl font-semibold mt-8'>{t('TermsConditionCancellationPolicy')}</h1>
          <p className='my-3 text-sm font-lighter'>{t('TermsConditionCancellationPolicyInfo')}</p>
          {cancellationPolicy.map((item, i) => (
            <label key={i}>
              <div className='flex items-start gap-3'>
                <input
                  type="radio"
                  name="cancellation"
                  value={item.heading}
                  checked={selectedCancellationPolicy === item.heading}
                  onChange={(e) => setSelectedCancellationPolicy(e.target.value)}
                  className='mt-1'
                />
                <div className='m-0 p-0'>
                  <h1 className='text-sm font-semibold'>{t(`TermsConditionCancellationHeading${i + 1}`)}</h1>
                  {item.text && <p className='font-lighter text-sm my-1'>{t(`TermsConditionCancellationText${i + 1}`)}</p>}
                </div>
              </div>
            </label>
          ))}
          {selectedCancellationPolicy === 'Personalized' && (
            <div className='mt-4'>
              <label className='block text-sm font-semibold mb-2'>{t('TermsConditionPersonalizedCancellation')}</label>
              <textarea
                value={personalizedPolicy}
                onChange={(e) => setPersonalizedPolicy(e.target.value)}
                rows={4}
                className='w-full outline-none border rounded-md p-2'
              ></textarea>
            </div>
          )}
        </article>
        <div className='my-5 p-4 border border-gray-300 rounded-md'>
          <label className='cursor-pointer'>
            <input
              type="checkbox"
              checked={applyToFleet}
              onChange={(e) => setApplyToFleet(e.target.checked)}
              className='cursor-pointer'
            />
            <span className='ms-2'>{t('TermsConditionApplyToFleet')}</span>
          </label>
        </div>
        <button
          className='text-sm py-2 px-4 text-white bg-[#a98b4a] rounded-md'
          onClick={handleSave}
        >
          {t('TermsConditionSaveButton')}
        </button>
      </div>
    </section>
  );
};

const ToggleButton = ({ isToggled, setIsToggled }) => {
  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isToggled ? 'bg-green-400' : ''}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isToggled ? 'translate-x-4' : ''}`}
      ></div>
    </div>
  );
};

export default TermsCondition;
