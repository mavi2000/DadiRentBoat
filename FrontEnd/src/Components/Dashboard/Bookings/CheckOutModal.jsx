import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SignatureCanvas from "react-signature-canvas";

export default function CheckOutModal({ isCheckOut, setIsCheckOut }) {
  const [formData, setFormData] = useState({
    boatInspected: false,
    damageDetected: false,
    damageDetails: "",
    damageDeposit: "",
    signature: null,
  });

  const [errors, setErrors] = useState({});
  const sigCanvas = useRef({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.boatInspected)
      newErrors.boatInspected = "Boat inspection confirmation is required";
    if (formData.damageDetected && !formData.damageDetails)
      newErrors.damageDetails = "Damage details are required";
    if (formData.damageDetected && !formData.damageDeposit)
      newErrors.damageDeposit = "Damage deposit is required";
    if (!formData.signature) newErrors.signature = "Signature is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const signatureImage = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      console.log({ ...formData, signature: signatureImage });
      setIsCheckOut(false);
    }
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
    setFormData({ ...formData, signature: null });
  };

  return (
    <Transition appear show={isCheckOut} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsCheckOut(false)}
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
                  Check Out
                </Dialog.Title>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="border rounded-lg border-gray-500 p-4">
                    <h4 className="text-md font-medium text-gray-700">
                      Boat Inspected
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
                    <div>
                      <h4 className="text-md font-medium text-gray-700">
                        Damage Detected
                      </h4>
                      <p className="text-sm text-gray-500">
                        Mark Check box if boat damage is detected during
                        inspection
                      </p>
                      <input
                        type="checkbox"
                        name="damageDetected"
                        checked={formData.damageDetected}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                      <label className="ml-2 text-sm font-medium text-gray-700">
                        Yes, Damage is detected
                      </label>
                      <textarea
                        name="damageDetails"
                        value={formData.damageDetails}
                        onChange={handleInputChange}
                        placeholder="Details"
                        className="mt-2 block w-full rounded-md border border-gray-500 p-4 shadow-sm outline-none sm:text-sm"
                        disabled={!formData.damageDetected}
                      />
                      {errors.damageDetails && (
                        <p className="text-red-500 text-sm">
                          {errors.damageDetails}
                        </p>
                      )}
                    </div>

                    <div>
                      <h4 className="text-md font-medium text-gray-700">
                        Damage Deposit
                      </h4>
                      <input
                        type="number"
                        name="damageDeposit"
                        value={formData.damageDeposit}
                        onChange={handleInputChange}
                        placeholder="Enter"
                        className="mt-2 block w-full rounded-md border border-gray-500 p-4 outline-none shadow-sm sm:text-sm"
                        disabled={!formData.damageDetected}
                      />
                      {errors.damageDeposit && (
                        <p className="text-red-500 text-sm">
                          {errors.damageDeposit}
                        </p>
                      )}
                    </div>

                    <div>
                      <h4 className="text-md font-medium text-gray-700">
                        The Signature
                      </h4>
                      <SignatureCanvas
                        penColor="black"
                        canvasProps={{
                          height: 100,
                          className:
                            "border rounded-lg border-gray-500 p-4 w-full",
                        }}
                        ref={sigCanvas}
                        onEnd={() =>
                          setFormData({
                            ...formData,
                            signature: sigCanvas.current.isEmpty()
                              ? null
                              : sigCanvas.current,
                          })
                        }
                      />
                      <button
                        type="button"
                        className="mt-2 inline-flex justify-center rounded-md text-[#e6c481] border-2 border-[#e6c481] px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
                        onClick={clearSignature}
                      >
                        Refresh
                      </button>
                      {errors.signature && (
                        <p className="text-red-500 text-sm">
                          {errors.signature}
                        </p>
                      )}
                    </div>
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
                      onClick={() => setIsCheckOut(false)}
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
