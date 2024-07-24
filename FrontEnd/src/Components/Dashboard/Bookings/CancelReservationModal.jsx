import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function CancelReservationModal({ isCancel, setIsCancel }) {
  const [formData, setFormData] = useState({ cancellationReason: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.cancellationReason)
      newErrors.cancellationReason = "Cancellation reason is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      setIsCancel(false);
    }
  };

  return (
    <Transition appear show={isCancel} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsCancel(false)}
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Cancel Reservation
                </Dialog.Title>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-md font-medium text-gray-700">
                      Write a reason of Cancellation
                    </h4>
                    <textarea
                      name="cancellationReason"
                      value={formData.cancellationReason}
                      onChange={handleInputChange}
                      placeholder="Details"
                      className="mt-2 block w-full border outline-none border-gray-500 p-4 rounded-md shadow-sm sm:text-sm"
                    />
                    {errors.cancellationReason && (
                      <p className="text-red-500 text-sm">
                        {errors.cancellationReason}
                      </p>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#cba353] px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      className="ml-4 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                      onClick={() => setIsCancel(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
