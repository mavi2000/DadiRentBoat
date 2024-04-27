import { IoChevronBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react'; // Import useState and useRef
import PopupsLayout from './PopupsLayout';

const TwoStepVerification = () => {
  const [codes, setCodes] = useState(['', '', '', '', '', '']); // State to hold input values
  const refs = useRef([]); // Refs to store input elements

  const handleChange = (index, value) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (value !== '' && index < 5) {
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

  return (
    <PopupsLayout
      isSocials={false}
      isBack={true}
      content={
        <div className="max-w-[450px]">
          <h2 className="text-2xl font-medium">Two-Step Verification 💬</h2>
          <p className="text-base mb-8">
            We sent a verification code to your mobile. Enter the code from the
            mobile in the field below.{' '}
            <span className="block font-semibold">******9763</span>
          </p>

          <label htmlFor="securityCode" className="font-semibold">
            Type your 6 digit security code
          </label>
          <div className="flex gap-2 w-full justify-between mt-2 flex-wrap">
            {codes.map((code, index) => (
              <input
                key={index}
                type="text"
                id={`securityCode${index}`}
                name={`securityCode${index}`}
                autoComplete="off"
                className="text-center size-[50px] border-[1px] border-[#DBDADE] outline-none rounded-md px-4 py-2"
                value={code}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (refs.current[index] = el)} // Store input elements in refs
              />
            ))}
          </div>

          <button className="bg-[--primary-color] px-6 py-3 rounded-md text-white w-full my-6">
            Verify my account
          </button>
          <p className="text-center">
            Didn't get the code?&nbsp;&nbsp;
            <span className="text-[--primary-color] cursor-pointer">
              Resend
            </span>
          </p>
        </div>
      }
    />
  );
};
export default TwoStepVerification;
