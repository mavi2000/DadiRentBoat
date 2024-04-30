import React from 'react';
import { RiUserLine } from 'react-icons/ri'; // Import the profile icon
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const ScheduleTable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['6pm', '7pm', '8pm', '9pm','10pm','11pm','12am','1am','2am','3am', '4am'];

  const renderCell = (day, time) => {
    if (day === 'Wednesday' && time === '9pm') {
      return (
        <div className="w-14 bg-F9DB7B bg-opacity-50 p-2 border-r border-gray-200 cursor-pointer hover:bg-yellow-200">
          <RiUserLine /> John Doe
          <div>Pending (yellow color)</div>
          <div>Departure: 7:00am</div>
          <div>Return Time: 7:00pm</div>
          <div>Paid Online: $40</div>
          <div>Pay at Harbor: $10</div>
        </div>
      );
    } else if (day === 'Thursday' && time === '11pm') {
      return (
        <div className="w-14 bg-5BAA73 bg-opacity-50 p-2 border-r border-gray-200 cursor-pointer hover:bg-green-200">
          <RiUserLine /> John Doe
          <div>Confirmed (green color)</div>
          <div>Departure: 7:00am</div>
          <div>Return Time: 7:00pm</div>
          <div>Paid Online: $40</div>
          <div>Pay at Harbor: $10</div>
        </div>
      );
    } else {
      return <div className="w-14 p-2 border-r border-gray-200"></div>;
    }
  };

  return (
    <div className='mx-[6%] my-[4%]'>
        <div className=' flex justify-between items-center'>
  
  <div className=' flex justify-center items-center'>
    <span><GrFormPrevious/></span>
    <span><GrFormNext/></span>
  {new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })}

  </div>

<div className=' flex'>  
<button className=' py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-15 rounded-l-md'>Month</button>
        <button className=' py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-30 rounded-r-md'>Week</button>
        </div>       
</div>
    <table className="w-full  mt-4" >
<thead>
  <tr>
    {days.map((day, index) => (
      <th key={day} className={`p-2 border-r border-gray-200 ${index === 0 ? 'rounded-l-md' : ''} ${index === days.length - 1 ? 'rounded-r-md' : ''}`}>
        {`${day} 8/${7 + index}`}
      </th>
    ))}
  </tr>
  {times.map(time => (
    <tr key={time}>
      <td className="p-2 border-r border-gray-200">{time}</td>
      {days.map(day => (
        <td key={`${day}-${time}`} className="p-2 border-r border-gray-200">
          {renderCell(day, time)}
        </td>
      ))}
    </tr>
  ))}
</thead>

      <tbody>
        {times.map(time => (
          <tr key={time}>
            {days.map(day => (
              <td key={`${day}-${time}`} className="p-2 border-r border-gray-200">
                {renderCell(day, time)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ScheduleTable;
