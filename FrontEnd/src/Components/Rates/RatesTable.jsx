const RatesTable = () => {
  return (
    <table className=" border-collapse mt-12 text-[#676767] text-center whitespace-nowrap">
      <tr className="relative text-lg text-white bg-[var(--primary-color)] py-16 font-medium text-center ">
        <th className="font-normal sticky top-0 left-0 py-12 px-2 border-r-[2px] border-[#DBDBDB] text-center bg-[var(--primary-color)]">
          Boat
        </th>
        <th
          colSpan={2}
          className="font-normal py-12 px-2 border-r-[2px] border-[#DBDBDB] text-center"
        >
          Jan-Feb-Oct-Nov-Dec
        </th>

        <th
          colSpan={2}
          className="font-normal py-12 px-2 border-r-[2px] border-[#DBDBDB] text-center"
        >
          Mar-April
        </th>

        <th
          colSpan={2}
          className="font-normal py-12 px-2 border-r-[2px] border-[#DBDBDB] text-center"
        >
          May
        </th>
        <th
          colSpan={3}
          className="font-normal py-12 px-2 border-r-[2px] border-[#DBDBDB] text-center"
        >
          Jun-Sep
        </th>
        <th
          colSpan={3}
          className="font-normal py-12 px-2 border-r-[2px] border-[#DBDBDB] text-center"
        >
          July-August
        </th>
        <th
          colSpan={3}
          className="font-normal py-12 px-2 border-r-[2px] border-[#DBDBDB] text-center"
        >
          14-15-16 Aug
        </th>
      </tr>

      <tr className="relative">
        <th className="bg-white sticky top-0 left-0 border-[1px] border-[var(--primary-color)] border-r-[2px] border-r-[var(--primary-color)]">
          <div className="bg-[#CBA5574D] text-[#cba45700] px-4 py-2">
            Nemo
            <span className="text-xs block">Open Blumax 570</span>
          </div>
        </th>

        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Half Day
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          Whole day
        </td>

        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Half Day
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          Whole day
        </td>

        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Half Day
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          Whole day
        </td>

        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Morning
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Afternoon
        </td>

        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          All day
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Morning
        </td>

        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Afternoon
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          All day
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Morning
        </td>

        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          Afternoon
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          All day
        </td>
      </tr>

      <tr className="relative">
        <td className="bg-white whitespace-nowrap text-center sticky left-0 top-0  text-lg font-normal border-[1px] border-[var(--primary-color)] border-r-[2px] border-r-[var(--primary-color)]">
          <div className="bg-[#CBA5574D] px-4 py-2">
            Nemo
            <span className="text-xs block">Open Blumax 570</span>
          </div>
        </td>
        {/* January */}
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €55
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          €80
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €80
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          €120
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €100
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          €150
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €110</span>
          <br />
          <span className="text-red-400"> €135</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €160</span>
          <br />
          <span className="text-red-400"> €190</span>
        </td>

        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          <span className="text-lime-500"> €200</span>
          <br />
          <span className="text-red-400"> €220</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €120</span>
          <br />
          <span className="text-red-400"> €135</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €170</span>
          <br />
          <span className="text-red-400"> €200</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          <span className="text-lime-500"> €200</span>
          <br />
          <span className="text-red-400"> €260</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €170
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €250
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          €350
        </td>
      </tr>

      <tr className="relative">
        <td className="bg-white whitespace-nowrap text-center sticky left-0 top-0  text-lg font-normal border-[1px] border-[var(--primary-color)] border-r-[2px] border-r-[var(--primary-color)]">
          <div className="bg-[#CBA5574D] px-4 py-2">
            Dory
            <span className="text-xs block">Open Blumax 570</span>
          </div>
        </td>
        {/* January */}
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €55
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          €80
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          M€80
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          €120
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €100
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          €150
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €110</span>
          <br />
          <span className="text-red-400"> €135</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €160</span>
          <br />
          <span className="text-red-400"> €190</span>
        </td>

        {/* March */}
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          <span className="text-lime-500"> €200</span>
          <br />
          <span className="text-red-400"> €220</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left ">
          <span className="text-lime-500"> €120</span>
          <br />
          <span className="text-red-400"> €135</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €170</span>
          <br />
          <span className="text-red-400"> €190</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left ">
          <span className="text-lime-500"> €200</span>
          <br />
          <span className="text-red-400"> €260</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €170
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €250
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          €350
        </td>
      </tr>

      <tr className="relative">
        <td className="bg-white whitespace-nowrap text-center sticky left-0 top-0  text-lg font-normal border-[1px] border-[var(--primary-color)] border-r-[2px] border-r-[var(--primary-color)]">
          <div className="bg-[#CBA5574D] px-4 py-2">
            Diva
            <span className="text-xs block">Open Blumax 570</span>
          </div>
        </td>
        {/* January */}
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €55
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          €80
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €80
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          €120
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €100
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          €150
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €110</span>
          <br />
          <span className="text-red-400"> €135</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €160</span>
          <br />
          <span className="text-red-400"> €190</span>
        </td>

        {/* March */}
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          <span className="text-lime-500"> €200</span>
          <br />
          <span className="text-red-400"> €220</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €120</span>
          <br />
          <span className="text-red-400"> €135</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €170</span>
          <br />
          <span className="text-red-400"> €190</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          <span className="text-lime-500"> €200</span>
          <br />
          <span className="text-red-400"> €260</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €170
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €250
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          €350
        </td>
      </tr>

      <tr className="relative">
        <td className="bg-white whitespace-nowrap text-center sticky left-0 top-0  text-lg font-normal border-[1px] border-[var(--primary-color)] border-r-[2px] border-r-[var(--primary-color)]">
          <div className="bg-[#CBA5574D] px-4 py-2">
            Annina
            <span className="text-xs block">Open sea ghost 550</span>
          </div>
        </td>
        {/* January */}
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €50
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          €75
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €70
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          €100
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €80
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          €120
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €90</span>
          <br />
          <span className="text-red-400"> €120</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €130</span>
          <br />
          <span className="text-red-400"> €160</span>
        </td>

        {/* March */}
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left border-r-[2px] border-r-[var(--primary-color)]">
          <span className="text-lime-500"> €180</span>
          <br />
          <span className="text-red-400"> €200</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €100</span>
          <br />
          <span className="text-red-400"> €125</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          <span className="text-lime-500"> €150</span>
          <br />
          <span className="text-red-400"> €170</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          <span className="text-lime-500"> €200</span>
          <br />
          <span className="text-red-400"> €230</span>
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €150
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] whitespace-nowrap text-left">
          €220
        </td>
        <td className="px-4 py-2 border-[1px] border-[#01365914] border-r-[2px] border-r-[var(--primary-color)] whitespace-nowrap text-left">
          €280
        </td>
      </tr>
    </table>
  );
};
export default RatesTable;
