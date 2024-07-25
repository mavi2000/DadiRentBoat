import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AdminContext } from "../../../../Context/AdminContext";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ReminderForm = ({ isRPopUp, setIsRPopUp, booking }) => {
  const { sendReminder } = useContext(AdminContext); // Use the sendReminder function from context
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendImmediately, setSendImmediately] = useState(true);
  const [specificTime, setSpecificTime] = useState("");
  const [specificDate, setSpecificDate] = useState("");
  const [footerMessage, setFooterMessage] = useState("");

  const handleMessageChange = (value) => {
    setMessage(value);
  };

  const handleSendImmediatelyChange = () => {
    setSendImmediately(true);
    setSpecificTime("");
    setSpecificDate("");
  };

  const handleSpecificTimeChange = () => {
    setSendImmediately(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reminderData = {
      userId: booking.userId._id, // Get userId from booking.userId._id
      userName: booking.userId.username,
      subject,
      message,
      sendImmediately,
      specificTime: sendImmediately ? null : specificTime,
      specificDate: sendImmediately ? null : specificDate,
      email: booking.userId.email, // Get email from booking.userId.email
      footerMessage,
    };
    console.log("Reminder Data:", reminderData);

    try {
      const response = await sendReminder(reminderData); // Call the sendReminder function
      console.log("Reminder sent successfully", response);
      setIsRPopUp(false);
    } catch (error) {
      console.error("Error sending reminder:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4">Reminder</h2>
        <form onSubmit={handleSubmit}>
          <div className="bg-[#fafafa] mb-4 rounded-lg p-4">
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter your Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Attachments
              </label>
              <div className="border-dashed bg-[#f5f1ea] border-2 border-gray-300 p-4 rounded flex flex-col items-center justify-center">
                <img src="/icons/icon-yellow-upload.svg" alt="Upload Icon" />
                <p className="text-gray-500">
                  Drag & drop files or{" "}
                  <span className="text-blue-500 cursor-pointer">Browse</span>
                </p>
                <p className="text-gray-500">
                  Supported formats: JPG, JPEG, PNG, PDF, Excel
                </p>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <ReactQuill
                value={message}
                onChange={handleMessageChange}
                className="h-40 pb-12"
                placeholder="Enter your mail body"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="footerMessage" className="block text-gray-700 font-bold mb-2">
                Footer Message
              </label>
              <input
                type="text"
                id="footerMessage"
                placeholder="Enter footer message"
                value={footerMessage}
                onChange={(e) => setFooterMessage(e.target.value)}
                className="block w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                When do you want to send this reminder?
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="sendImmediately"
                  checked={sendImmediately}
                  onChange={handleSendImmediatelyChange}
                  className="mr-2"
                />
                <label htmlFor="sendImmediately" className="text-gray-700">
                  Send immediately
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="sendAtSpecificTime"
                  checked={!sendImmediately}
                  onChange={handleSpecificTimeChange}
                  className="mr-2"
                />
                <label htmlFor="sendAtSpecificTime" className="text-gray-700">
                  Send at a specific time
                </label>
              </div>
            </div>
            {!sendImmediately && (
              <div className="flex space-x-4 mb-4">
                <div>
                  <label htmlFor="specificDate" className="block text-gray-700 font-bold mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="specificDate"
                    value={specificDate}
                    onChange={(e) => setSpecificDate(e.target.value)}
                    className="block w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div>
                  <label htmlFor="specificTime" className="block text-gray-700 font-bold mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    id="specificTime"
                    value={specificTime}
                    onChange={(e) => setSpecificTime(e.target.value)}
                    className="block w-full border border-gray-300 rounded p-2"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsRPopUp(!isRPopUp)}
              className="bg-[#f2f2f2] text-[#b7b7b7] py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" text-[#e6c481] border-2 border-[#e6c481] py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};




export default function ReminderModal({ isRPopUp, setIsRPopUp, booking }) {
  return (
    <>
      <Transition appear show={isRPopUp} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsRPopUp(!isRPopUp)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <ReminderForm isRPopUp={isRPopUp} setIsRPopUp={setIsRPopUp} booking={booking} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}