import { useState } from 'react';
import boatImg from '../../../assets/Images/our-fleet-boat1.webp';
import AttachmentPopup from './AttachmentPopup';

const ExpensesTable = () => {
  const [addAttachment, setAddAttachment] = useState(false);

  return (
    <div className="bg-white rounded-md shadow-lg px-8 py-4 my-4">
      <div className="flex gap-2 justify-between flex-wrap items-center">
        <h1 className="text-[#4b465cd4] font-medium text-lg">Expenses </h1>
        <label htmlFor="duration">
          <select
            className="text-[#7B7B7B] text-base outline-none border-[1px] border-[#7B7B7B] px-3 py-2 rounded-md"
            name="duration"
            id="duration"
          >
            <option value="Weekly">export </option>
            <option value="Monthly">CSV</option>
            <option value="Yearly">PDF</option>
          </select>
        </label>
      </div>

      <div className="flex gap-2 justify-end mt-12">
        <button
          onClick={() => {
            setAddAttachment(true);
          }}
          className="rounded-md px-3 py-2 border-[1px] border-[--primary-color] text-[--primary-color] mr-auto ml-0"
        >
          + Add Attachment
          {addAttachment && <AttachmentPopup cancel={setAddAttachment} />}
        </button>
        <button className="rounded-md px-3 py-2 border-[1px] border-[--primary-color] text-[--primary-color]">
          + &nbsp; Add Row
        </button>
        <button className="rounded-md px-3 py-2 border-[1px] border-[--primary-color] text-[--primary-color]">
          + &nbsp; Add Column
        </button>
      </div>
      <div className="overflow-auto w-full">
        <table className="w-full overflow-auto z-0 text-[#808080] mt-3">
          <tr className="bg-[#CBA5574D] text-left relative z-0">
            <th className="px-4 py-3 border-[1px] border-[#01365914] text-base font-medium sticky top-0 left-0">
              Expense ID
            </th>
            <th className="px-4 py-3 border-[1px] border-[#01365914] text-base font-medium">
              Name
            </th>
            <th className="px-4 py-3 border-[1px] border-[#01365914] text-base font-medium">
              Description
            </th>
            <th className="px-4 py-3 border-[1px] border-[#01365914] text-base font-medium">
              Amount
            </th>
            <th className="px-4 py-3 border-[1px] border-[#01365914] text-base font-medium">
              Amount
            </th>
            <th className="px-4 py-3 border-[1px] border-[#01365914] text-base font-medium">
              Date
            </th>
            <th className="px-4 py-3 border-[1px] border-[#01365914] text-base font-medium">
              Attachment
            </th>
          </tr>
          <tr className=" text-left relative z-0">
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              #827930
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0 ">
              Name
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              Lorem ipsum
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              13 April 2024
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              <img src={boatImg} alt="boat" className="size-[38px]" />
            </td>
          </tr>
          <tr className=" text-left relative z-0">
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              #827930
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0 ">
              Name
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              Lorem ipsum
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              13 April 2024
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              <img src={boatImg} alt="boat" className="size-[38px]" />
            </td>
          </tr>
          <tr className=" text-left relative z-0">
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              #827930
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0 ">
              Name
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              Lorem ipsum
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              13 April 2024
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              <img src={boatImg} alt="boat" className="size-[38px]" />
            </td>
          </tr>
          <tr className=" text-left relative z-0">
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              #827930
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0 ">
              Name
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              Lorem ipsum
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              13 April 2024
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              <img src={boatImg} alt="boat" className="size-[38px]" />
            </td>
          </tr>
          <tr className=" text-left relative z-0">
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              #827930
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0 ">
              Name
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              Lorem ipsum
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              13 April 2024
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              <img src={boatImg} alt="boat" className="size-[38px]" />
            </td>
          </tr>
          <tr className=" text-left relative z-0">
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              #827930
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0 ">
              Name
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm sticky top-0 left-0">
              Lorem ipsum
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              €54
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              13 April 2024
            </td>
            <td className="px-4 py-3 border-[1px] border-[#01365914] text-sm">
              <img src={boatImg} alt="boat" className="size-[38px]" />
            </td>
          </tr>
        </table>
      </div>
      <div className="flex gap-2 text-[#808080] items-center mt-3">
        <button className="border-b-[2px] border-[--primary-color] px-4 py-2 text-sm">
          Sheet 1
        </button>
        <button className="border-b-[2px] border-[--primary-color] px-4 py-2 text-sm">
          Sheet 2
        </button>
        <button className="border-b-[2px] border-[--primary-color] px-4 py-2 text-sm">
          Sheet 3
        </button>
        <button className="border-b-[2px] border-[--primary-color] px-4 py-2 text-sm">
          Sheet 4
        </button>
        <button className="rounded-full bg-[#CBA5574D] text-[--primary-color] size-[20px] flex items-center justify-center">
          +
        </button>
      </div>
    </div>
  );
};
export default ExpensesTable;
