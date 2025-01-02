import { IoClose } from 'react-icons/io5';
import rulesImg from '../assets/Images/rules-of-conduct.png';

const RuleOfCunduct = ({ setShowRuleOfConduct }) => {
  return (
    <div className="fixed bg-[#D9D9D9B2] z-50 px-4 w-full left-0 top-0 h-full flex items-center justify-center">
  <div className="bg-white rounded-xl w-full md:w-4/5 px-8 pb-4 overflow-auto h-[90svh]">
    <div className="sticky top-0 -mx-8 px-8 bg-[var(--primary-color)] text-white py-3 mb-3">
      <IoClose
        onClick={() => setShowRuleOfConduct(false)}
        className="-mr-4 ml-auto cursor-pointer hover:opacity-60 text-4xl"
      />
      <h1 className="font-semibold text-2xl mb-2">
        GENERAL RULES OF CONDUCT DURING RENTAL
      </h1>
    </div>
    <p>
      Below are some general rules of conduct during the rental of vessels from
      Dadi Rent s.r.l.s.a. These rules are extracted from the recreational
      navigation regulations of the Italian coastal state.
    </p>
    <ol className="my-4 pl-6 list-decimal">
      <li>
        It is strictly forbidden to carry more people than the maximum number
        allowed by the vessel's certification (maximum of 8 people).
      </li>
      <li>
        It is strictly forbidden to navigate, anchor, or moor less than 200
        meters from the coast. This prohibition does not apply if transiting
        through a landing/launch corridor.
      </li>
      <li>
        It is strictly forbidden to navigate at a speed greater than 3 knots
        while in a landing/launch corridor. It is also mandatory to keep to the
        right and maintain the minimum steerable speed.
      </li>
      <li>
        It is strictly forbidden to exceed a speed of 10 knots within 0.53
        nautical miles (1000 meters) from the nearest coast.
      </li>
      <li>
        It is strictly forbidden to navigate less than 100 meters from a buoy
        marked "diver in the water."
      </li>
      <li>
        It is strictly forbidden to operate the vessel under the influence of
        drugs or alcohol.
      </li>
      <li>
        The renter assumes responsibility for the safety of passengers, third
        parties, and proper use of the vessel.
      </li>
      <li>
        Navigation, fishing, mooring, and anchoring are prohibited in protected
        marine areas unless the necessary permits have been obtained.
      </li>
      <li>
        In case of breakdowns and/or problems, contact the Coast Guard's sea
        emergency number at 1530.
      </li>
    </ol>
    <img
      src={rulesImg}
      alt="rules-of-conduct"
      className="w-full h-auto my-4"
    />
  </div>
</div>
  );
};
export default RuleOfCunduct;
