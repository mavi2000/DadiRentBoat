import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
const ReminderForm = ({ isRPopUp, setIsRPopUp }) => {
  const [platform, setPlatform] = useState("");
  const [message, setMessage] = useState("");
  const [sendImmediately, setSendImmediately] = useState(true);
  const [specificTime, setSpecificTime] = useState("");
  const [specificDate, setSpecificDate] = useState("");

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const reminderData = {
      platform,
      message,
      sendImmediately,
      specificTime: sendImmediately ? null : specificTime,
      specificDate: sendImmediately ? null : specificDate,
    };
    console.log("Reminder Data:", reminderData);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4">Reminder</h2>
        <form onSubmit={handleSubmit}>
          <div className="bg-[#fafafa] mb-4 rounded-lg p-4">
            <div className="mb-4">
              <label
                htmlFor="platform"
                className="block text-gray-700 font-bold mb-2"
              >
                Select Platform (WhatsApp, Email, Text Message)
              </label>
              <select
                id="platform"
                value={platform}
                onChange={handlePlatformChange}
                className="block w-full border border-gray-300 rounded p-2"
              >
                <option value="" disabled>
                  Select Platform
                </option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Email">Email</option>
                <option value="TextMessage">Text Message</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Attachments
              </label>
              <div className="border-dashed bg-[#f5f1ea] border-2 border-gray-300 p-4 rounded flex flex-col items-center justify-center">
                <img src="/icons/icon-yellow-upload.svg" />
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
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <ReactQuill
                value={message}
                onChange={handleMessageChange}
                className="h-40 pb-12"
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
                  <label
                    htmlFor="specificDate"
                    className="block text-gray-700 font-bold mb-2"
                  >
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
                  <label
                    htmlFor="specificTime"
                    className="block text-gray-700 font-bold mb-2"
                  >
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
export default function ReminderModal({ isRPopUp, setIsRPopUp }) {
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
                  <ReminderForm isRPopUp={isRPopUp} setIsRPopUp={setIsRPopUp} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
