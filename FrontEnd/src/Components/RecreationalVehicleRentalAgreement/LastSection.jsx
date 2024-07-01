import fillipo from '../../assets/Images/fillipo.png';
import logo from '../../assets/Images/logo.png';
import { VscFilePdf } from 'react-icons/vsc';

const LastSection = ({ data }) => {
  return (
    <div>
      <p className="text-lg md:mt-24">Per accettazione Il locatore</p>

      <img
        src={fillipo}
        alt="fillipo"
        className="max-w-full md:max-w-[80%] h-[136px] mt-4 block mx-auto"
      />
      <p className="text-lg md:mt-24">
        DaDi Rent S.r.l.s Via San Francesco, 17 ~ 57123 Livorno (LI) ~ Partita
        I.V.A.: 01964780496 ~ Iban: IT58Y0103013900000007008638 Cell. : 370
        1564317 ~ e-mail: info@dadirent.it ~ pec: dadirent@pec.it ~ web:
        www.dadirent.it
      </p>

      <img src={logo} alt="logo" className="size-[150px] mx-auto mt-16" />

      <hr className="border-none h-[1px] bg-[#DBDADE] mt-8 mb-12" />
      <div className="flex gap-4 w-full md:justify-end mb-12">
        <button className="flex items-center gap-2 rounded-lg px-6 py-3 bg-[#CBA55726] text-lg font-bold text-[--primary-color]">
          <VscFilePdf size={25} />
          Download PDF
        </button>
        <button type='submit' className="rounded-lg px-6 py-3 bg-[--primary-color] text-lg font-bold text-white" disabled={!data.valid}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default LastSection;
