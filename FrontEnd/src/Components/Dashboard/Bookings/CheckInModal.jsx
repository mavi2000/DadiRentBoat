import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function CheckInModal({ isCheckIN, setIsCheckIN }) {
  const [formData, setFormData] = useState({
    confirmPayment: false,
    boatInspected: false,
    preBoatDamage: false,
    preDamageDetails: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.confirmPayment)
      newErrors.confirmPayment = "Payment confirmation is required";
    if (!formData.boatInspected)
      newErrors.boatInspected = "Boat inspection confirmation is required";
    if (formData.preBoatDamage && !formData.preDamageDetails)
      newErrors.preDamageDetails = "Damage details are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      setIsCheckIN(false);
    }
  };

  return (
    <Transition appear show={isCheckIN} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsCheckIN(false)}
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
                  Check In
                </Dialog.Title>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="border rounded-lg border-gray-500 p-4">
                    <h4 className="text-md font-medium text-gray-700">
                      Payment Confirmation
                    </h4>
                    <p className="text-sm text-gray-500">
                      Mark Check box to confirm, due payment is paid by customer
                      at Harbour
                    </p>
                    <input
                      type="checkbox"
                      name="confirmPayment"
                      checked={formData.confirmPayment}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                      Confirm Payment
                    </label>
                    {errors.confirmPayment && (
                      <p className="text-red-500 text-sm">
                        {errors.confirmPayment}
                      </p>
                    )}
                  </div>

                  <div className="border rounded-lg border-gray-500 p-4">
                    <h4 className="text-md font-medium text-gray-700">
                      Pre Boat Inspection
                    </h4>
                    <p className="text-sm text-gray-500">
                      Mark Check box if boat is inspected successfully
                    </p>
                    <input
                      type="checkbox"
                      name="boatInspected"
                      checked={formData.boatInspected}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                      Boat Inspected successfully
                    </label>
                    {errors.boatInspected && (
                      <p className="text-red-500 text-sm">
                        {errors.boatInspected}
                      </p>
                    )}
                  </div>

                  <div className="border rounded-lg border-gray-500 p-4">
                    <h4 className="text-md font-medium text-gray-700">
                      Pre Boat Damage
                    </h4>
                    <p className="text-sm text-gray-500">
                      Mark Check box if boat is already damaged
                    </p>
                    <input
                      type="checkbox"
                      name="preBoatDamage"
                      checked={formData.preBoatDamage}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                      Yes
                    </label>
                    <textarea
                      name="preDamageDetails"
                      value={formData.preDamageDetails}
                      onChange={handleInputChange}
                      placeholder="Enter Details"
                      className="mt-2 block w-full rounded-md border border-gray-500 p-3 shadow-sm outline-none sm:text-sm"
                      disabled={!formData.preBoatDamage}
                    />
                    {errors.preDamageDetails && (
                      <p className="text-red-500 text-sm">
                        {errors.preDamageDetails}
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
                      onClick={() => setIsCheckIN(false)}
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
