import React, { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AdminContext } from "../../../../Context/AdminContext";

export default function RentalAgreementModal({ isRAPopUp, setIsRAPopUp, booking }) {
  const { getAgreementByUserId } = useContext(AdminContext);

  const [data, setData] = useState({
    userId: "N/A",
    firstName: "N/A",
    lastName: "N/A",
    dob: "N/A",
    birthCity: "N/A",
    birthProvince: "N/A",
    taxId: "N/A",
    address: "N/A",
    city: "N/A",
    state: "N/A",
    zip: "N/A",
    country: "N/A",
    phone: "N/A",
    email: "N/A",
    members: "N/A",
    leaseStart: "N/A",
    leaseEnd: "N/A",
    leasePrice: "N/A",
    faithPlace: "N/A",
    faithDate: "N/A",
    docFront: "N/A",
    docBack: "N/A",
    valid: false,
  });

  useEffect(() => {
    const fetchAgreement = async () => {
      try {
        const agreementData = await getAgreementByUserId(booking.userId._id);
        setData({
          userId: agreementData.userId || "N/A",
          firstName: agreementData.firstName || "N/A",
          lastName: agreementData.lastName || "N/A",
          dob: agreementData.dob || "N/A",
          birthCity: agreementData.birthCity || "N/A",
          birthProvince: agreementData.birthProvince || "N/A",
          taxId: agreementData.taxId || "N/A",
          address: agreementData.address || "N/A",
          city: agreementData.city || "N/A",
          state: agreementData.state || "N/A",
          zip: agreementData.zip || "N/A",
          country: agreementData.country || "N/A",
          phone: agreementData.phone || "N/A",
          email: agreementData.email || "N/A",
          members: agreementData.members || "N/A",
          leaseStart: agreementData.leaseStart || "N/A",
          leaseEnd: agreementData.leaseEnd || "N/A",
          leasePrice: agreementData.leasePrice || "N/A",
          faithPlace: agreementData.faithPlace || "N/A",
          faithDate: agreementData.faithDate || "N/A",
          docFront: agreementData.docFront || "N/A",
          docBack: agreementData.docBack || "N/A",
          valid: agreementData.valid || false,
        });
      } catch (error) {
        console.error("Error fetching rental agreement:", error);
      }
    };

    if (booking?.userId?._id) {
      fetchAgreement();
    }
  }, [booking, getAgreementByUserId]);

  return (
    <Transition appear show={isRAPopUp} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsRAPopUp(!isRAPopUp)}>
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="my-0 w-full flex flex-col gap-5">
                  <div className="flex gap-3">
                    <div className="w-2/3 flex flex-col gap-5">
                      <div className="flex gap-3 text-[#4B465C]">
                        <img className="h-14 w-14" src={"/images/logo.png"} alt="Logo" />
                        <div className="text-2xl font-medium">Dadi Rental</div>
                      </div>
                      <div className="flex flex-col gap-2 font-light text-[#4B465C]">
                        <div>Viale Italia, 62 c/o BAGNI PANCALDI IN ACQUAVIVA</div>
                        <div>Livorno, Italy</div>
                        <div>+39 3701564317</div>
                        <div>info@dadirent.it</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-[#4B465C]">
                    <div className="font-normal text-lg">Rental Agreement</div>
                    <div className="flex justify-between font-light text-sm">
                      <div>User ID:</div>
                      <div>{data.userId}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Name:</div>
                      <div>{data.firstName} {data.lastName}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Date of Birth:</div>
                      <div>{data.dob}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Birth City:</div>
                      <div>{data.birthCity}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Birth Province:</div>
                      <div>{data.birthProvince}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Tax ID:</div>
                      <div>{data.taxId}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Address:</div>
                      <div>{data.address}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>City:</div>
                      <div>{data.city}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>State:</div>
                      <div>{data.state}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Zip:</div>
                      <div>{data.zip}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Country:</div>
                      <div>{data.country}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Phone:</div>
                      <div>{data.phone}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Email:</div>
                      <div>{data.email}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Members:</div>
                      <div>{data.members}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Lease Start:</div>
                      <div>{data.leaseStart}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Lease End:</div>
                      <div>{data.leaseEnd}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Lease Price:</div>
                      <div>${data.leasePrice}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Faith Place:</div>
                      <div>{data.faithPlace}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Faith Date:</div>
                      <div>{data.faithDate}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Document Front:</div>
                      <div>{data.docFront !== "N/A" ? <a href={data.docFront} target="_blank" rel="noopener noreferrer">View</a> : "Not Uploaded"}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Document Back:</div>
                      <div>{data.docBack !== "N/A" ? <a href={data.docBack} target="_blank" rel="noopener noreferrer">View</a> : "Not Uploaded"}</div>
                    </div>
                    <div className="flex justify-between font-light text-sm">
                      <div>Valid:</div>
                      <div>{data.valid ? "Yes" : "No"}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      className="bg-gray-300 text-black px-4 py-2 rounded-full"
                      onClick={() => setIsRAPopUp(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
