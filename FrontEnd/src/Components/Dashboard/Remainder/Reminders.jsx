import React, { useEffect, useContext, useState } from 'react';
import RemainderNavbar from './RemainderNavbar';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSwap } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineAttachEmail } from "react-icons/md";
import Pagination from '../Pagination/Pagination';
import { AdminContext } from '../../../../Context/AdminContext';
import { useTranslation } from 'react-i18next';

const Reminders = () => {
  const { getAllReminders, deleteReminder } = useContext(AdminContext);
  const { t } = useTranslation();
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const remindersData = await getAllReminders();
        setReminders(remindersData);
      } catch (error) {
        console.error("Error fetching reminders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReminders();
  }, [getAllReminders]);

  const handleDelete = async (id) => {
    try {
      await deleteReminder(id);
      setReminders(reminders.filter(reminder => reminder._id !== id));
    } catch (error) {
      console.error("Error deleting reminder:", error);
    }
  };

  if (loading) {
    return <div>{t('reminderLoading')}</div>;
  }

  console.log("reminder", reminders);

  return (
    <>
      <RemainderNavbar />
      <div className='mx-[3%] md:mx-[1%] mt-[3%]'>
        <div className='flex md:justify-between flex-col md:flex-row space-y-3 md:space-y-0 items-center md:items-baseline'>
          <h1 className='text-lg font-medium text-[#4B465C]'>{t('reminderReminders')}</h1>
        </div>

        <div className='flex sm:justify-between mt-[2%] md:gap-6 justify-start space-x-3 sm:space-x-0'>
          <div className='flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE] md:flex-grow'>
            <IoSearchOutline className='text-gray-500' />
            <input
              type="text"
              placeholder={t('reminderSearch')}
              className='bg-transparent outline-none focus:ring-0 w-full'
            />
          </div>

        </div>

        <div className="container overflow-x-auto">
          <table className="w-full my-[3%] border border-[#DBDADE]">
            <thead className='bg-[#CBA557] bg-opacity-30'>
              <tr className="text-gray-600 text-left uppercase font-medium">
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">{t('reminderReminderType')}</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">{t('reminderReminderText')}</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">{t('reminderScheduleDate')}</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">{t('reminderStatus')}</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">{t('reminderAction')}</th>
              </tr>
            </thead>
            <tbody>
              {reminders.map(reminder => (
                <tr key={reminder._id} className="border-b border-[#DBDADE] hover:bg-gray-100">
                  <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">{t('reminderEmail')}</td>
                  <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">{reminder.message}</td>
                  <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
                    {reminder.sendImmediately 
                      ? new Date(reminder.createdAt).toLocaleDateString() 
                      : new Date(reminder.scheduledFor).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
                    <span className={`px-3 py-2 rounded-[10px] ${reminder.status === 'completed' ? 'bg-[#008000] bg-opacity-10 text-[#008000]' : 'bg-[#FF9F431A] bg-opacity-10 text-[#FFA500]'} font-bold text-sm`}>
                      {reminder.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
                    <span className='flex gap-2'>
                      <RiDeleteBinLine className='text-xl cursor-pointer text-[#676767]' onClick={() => handleDelete(reminder._id)} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default Reminders;
