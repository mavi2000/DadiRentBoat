import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
export default function InvoiceModal({ isINPopUp, setIsINPopUp }) {
  return (
    <>
      <Transition appear show={isINPopUp} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsINPopUp(!isINPopUp)}
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="">
                    <div className="my-0  w-[100%]  flex flex-col gap-5">
                      <div className=" flex 800px:p-10 600px:p-8 300px:p-5 gap-3  ">
                        <div className=" w-2/3 flex flex-col gap-5 ">
                          <div className="flex 300px:flex-col 500px:flex-row 500px:items-center gap-3 text-[#4B465C]">
                            <img
                              className=" 900px:h-20 500px:h-17 300px:h-14 900px:w-20 500px:w-14 300px:w-14 "
                              src={"/images/logo.png"}
                            />
                            <div className="900px:text-2xl 500px:xl 300px:lg font-medium">
                              Dadi Rental
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 font-light 1000px:text-lg 500px:text-sm 300px:text-xs text-[#4B465C]">
                            <div>
                              Viale Italia, 62 c/o BAGNI PANCALDI IN ACQUAVIVA
                            </div>
                            <div>Livorno, Italy</div>
                            <div>+39 3701564317</div>
                            <div>info@dadirent.it</div>
                          </div>
                        </div>
                        <div className=" w-1/3  text-[#4B465C] flex flex-col gap-2 ">
                          <div className=" font-normal 700px:text-lg 500px:text-sm 300px:text-xs w-[100%] ">
                            Invoice #3492
                          </div>
                          <div className="flex justify-between w-[100%] 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs">
                            <div className="  700px:w-[50%] 300px:w-[100%] 1000px:font-light 300px:font-medium ">
                              Date Issues:
                            </div>
                            <div className=" 700px:w-[50%] 300px:w-[100%] ">
                              25/08/2020
                            </div>
                          </div>
                          <div className="flex justify-between w-[90%] 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                            <div className=" 700px:w-[50%] 300px:w-[100%] 1000px:font-light 300px:font-medium ">
                              Date Due:
                            </div>
                            <div className="700px:w-[50%] 300px:w-[100%] ">
                              29/08/2020
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex 700px:p-10 300px:p-3 800px:gap-3 300px:gap-2 ">
                        <div className=" flex-1  flex flex-col gap-5 ">
                          <div className="flex flex-col  700px:gap-3 300px:gap-2 text-[#4B465C]">
                            <div className=" font-normal 700px:text-lg 500px:text-sm 300px:text-xs w-[100%]">
                              Invoice To:
                            </div>
                            <div className=" 1000px:text-lg 700px:text-sm 300px:text-xs w-[100%]">
                              <div className=" font-light">Thomas shelby</div>
                              <div className=" font-light">
                                Small Heath, B10 0HF, UK
                              </div>
                              <div className=" font-light">718-986-6062</div>
                              <div className=" font-light">
                                peakyFBlinders@gmail.com
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" flex-1  text-[#4B465C] flex flex-col gap-2 ">
                          <div className="flex flex-col  gap-3 text-[#4B465C]">
                            <div className="font-normal 700px:text-lg 500px:text-sm 300px:text-xs w-[100%]">
                              Bill To:
                            </div>
                            <div className="text-[#4B465C]">
                              <div className=" w-[90%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                                <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium ">
                                  Total Due:
                                </div>
                                <div className="font-light 900px:w-[50%] 300px:w-[100%]">
                                  $12,110.55
                                </div>
                              </div>
                              <div className=" w-[90%]  flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                                <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                  Bank name:
                                </div>
                                <div className="900px:w-[50%] 300px:w-[100%] font-light">
                                  Universal Bank
                                </div>
                              </div>
                              <div className=" w-[90%]  flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                                <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                  Country:
                                </div>
                                <div className=" 900px:w-[50%] 300px:w-[100%]  font-light">
                                  Italy
                                </div>
                              </div>
                              <div className=" w-[90%]  flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                                <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                  IBAN:
                                </div>
                                <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                                  ETD95476213874685
                                </div>
                              </div>
                              <div className=" w-[90%]  flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                                <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                  SWIFT code:
                                </div>
                                <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                                  BR91905
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" gap-3 border border[#DBDADE] text-[#4B465C]">
                      <div className="flex  w-[100%] ">
                        <div className="w-[50%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                          ITEM
                        </div>
                        <div className="w-[15%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                          COST
                        </div>
                        <div className="w-[15%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                          QTY
                        </div>
                        <div className="w-[20%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                          PRICE
                        </div>
                      </div>
                      <div className="flex w-[100%] ">
                        <div className="w-[50%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                          Boat Name
                        </div>
                        <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          $32
                        </div>
                        <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          1
                        </div>
                        <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          $32.00
                        </div>
                      </div>
                      <div className="flex w-[100%] ">
                        <div className="w-[50%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                          Skipper
                        </div>
                        <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          $15
                        </div>
                        <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          1
                        </div>
                        <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          $15.00
                        </div>
                      </div>
                      <div className="flex w-[100%] ">
                        <div className="w-[50%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                          Ticket
                        </div>
                        <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          $15
                        </div>
                        <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          1
                        </div>
                        <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                          $15.00
                        </div>
                      </div>
                    </div>
                    <div className=" flex 900px:p-10 300px:p-6 gap-3 ">
                      <div className=" flex-1 flex-col gap-5 ">
                        <div className="flex items-center gap-3 text-[#4B465C]">
                          <div className="text-[#FF6347] 900px:text-lg 300px:text-sm ">
                            Fuel is not included*
                          </div>
                        </div>
                      </div>
                      <div className=" flex-1  text-[#4B465C] text-sm flex flex-col gap-2 ">
                        <div className="flex flex-col gap-3 text-[#4B465C]">
                          <div className="text-[#4B465C] flex w-[100%] flex-col">
                            <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                              <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                Subtotal:
                              </div>
                              <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                                $154.25
                              </div>
                            </div>
                            <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                              <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                Service Charges:
                              </div>
                              <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                                $10{" "}
                              </div>
                            </div>
                            <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                              <div className="900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                Discount:
                              </div>
                              <div className="900px:w-[50%] 300px:w-[100%] font-light">
                                $00.00
                              </div>
                            </div>
                            <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs">
                              <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                VAT:
                              </div>
                              <div className="900px:w-[50%] 300px:w-[100%] font-light">
                                $50.00
                              </div>
                            </div>
                            <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                              <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                Total:
                              </div>
                              <div className="900px:w-[50%] 300px:w-[100%] font-light">
                                $204.25
                              </div>
                            </div>
                            <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                              <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                Amount Paid
                              </div>
                              <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                                $204.25
                              </div>
                            </div>
                            <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                              <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                                To Pay at Harbor
                              </div>
                              <div className="900px:w-[50%] 300px:w-[100%] font-light">
                                $204.25
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3">
                      <button
                        type="button"
                        className="bg-gray-300 text-black px-4 py-2 rounded-full"
                        onClick={() => setIsINPopUp(false)}
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
    </>
  );
}
