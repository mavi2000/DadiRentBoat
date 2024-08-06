import { useRef, useState } from 'react';
import signature from '../../assets/Images/signature.png';
import { MdOutlineRefresh } from 'react-icons/md';
import baseURL from '../../../APi/BaseUrl';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Verification = ({ data, setData }) => {
  const { t } = useTranslation();
  const [codes, setCodes] = useState(['', '', '', '']); // State to hold input values
  const refs = useRef([]); // Refs to store input elements
  const handleChange = (index, value) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value !== '' && index < 3) {
      refs.current[index + 1].focus(); // Focus next input if a character is entered
    }
  };

  const handleKeyDown = (index, event) => {
    if (
      (event.key === 'Backspace' || event.key === 'Delete') &&
      index > 0 &&
      codes[index] === ''
    ) {
      event.preventDefault(); // Prevent default behavior of backspace/delete
      refs.current[index - 1].focus(); // Focus previous input if backspace or delete is pressed and current input is empty
    }
  };
  const handleGetOTP = async () => {
    try {
      const res = await baseURL.post('/otp/generate-otp', { userId: data.userId, phone: data.phone })
      toast.success(t("otpSentSuccessfullyUnique"))
    } catch (error) {
      toast.error(t("failedToSendOtpTryAgainUnique"))
    }
  }
  const handleVerifyOTP = async () => {
    try {
      const res = await baseURL.patch('/otp/verify-otp', { otp: codes.join("") })
      toast.success(t("otpVerifiedSuccessfullyUnique"))
      setData({ ...data, valid: true })
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className="">
      <h1 className=" text-xl font-semibold">{t('verificationUnique')}</h1>
      <p className="text-lg mb-2 text-[#4b465cb8]">
        {t('selectVerificationProcessUnique')}
      </p>
      <div className="flex gap-4 md:gap-32 md:flex-row flex-col">
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="ElectronicSignature"
            name="ElectronicSignature"
            className="size-5"
          />
          <label htmlFor="ElectronicSignature">{t('electronicSignatureUnique')}</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="OTP"
            name="ElectronicSignature"
            className="size-5"
          />
          <label htmlFor="OTP">{t('otpUnique')}</label>
        </div>
      </div>

      <div className="flex gap-16 flex-col md:flex-row mt-8 ">
        <div className="grow ">
          <p className="text-base mb-2">{t('theConductorUnique')}</p>
          <div className="border-[1.5px] py-8 border-[#DBDADE] cursor-pointer rounded-lg flex items-center justify-center ">
            <div>
              <p className="text-sm">{t('signHereUnique')}</p>
              <img
                src={signature}
                alt="signature"
                className="size-[55px] mt-4"
              />
            </div>
          </div>
          <button className="flex gap-2 items-center ml-auto mr-0 mt-2 text-[--primary-color] border-[1.4px] border-[--primary-color] text-sm font-bold p-2 rounded-lg">
            <MdOutlineRefresh size={20} />
            {t('refreshUnique')}
          </button>
        </div>

        <div className="grow">
          <div className='text-center mt-4'>
            <button onClick={handleGetOTP} type='button' className='bg-[--primary-color] text-white p-2 rounded-xl'>{t('getOtpUnique')}</button>
          </div>
          <p className="text-base mb-2">{t('enterVerificationCodeUnique')}</p>
          <p className="text-lg">
            {t('enterCodeSentUnique')}
          </p>
          <div className="flex gap-2 w-full justify-center mt-6 flex-wrap">
            {codes.map((code, index) => (
              <input
                key={index}
                type="text"
                id={`securityCode${index}`}
                name={`securityCode${index}`}
                autoComplete="off"
                className={`text-center font-bold text-2xl size-[50px] 
                  ${code
                    ? 'bg-white border-[1.5px] border-[var(--primary-color)]'
                    : 'bg-[#EFF0F2]'
                  }
                  focus:outline-none rounded-2xl px-4 py-2`}
                value={code}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (refs.current[index] = el)} // Store input elements in refs
              />
            ))}
          </div>
          <div className='text-center mt-4'>
            <button onClick={handleVerifyOTP} type='button' className='bg-[--primary-color] text-white p-2 rounded-xl'>{t('verifyOtpUnique')}</button>
          </div>
          <p className="text-center mt-8">
            {t('resendCodeUnique')}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Verification;