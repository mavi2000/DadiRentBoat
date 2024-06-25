import React, { useState, useContext, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from 'react-toastify'; // Assuming you use react-toastify for notifications
import baseURL from "../../../../APi/BaseUrl";

const Voucher = () => {
  const id = localStorage.getItem("id")
  const { createVoucher, boatId } = useContext(AdminContext); // Access context function
  const [voucherName, setVoucherName] = useState("");
  const [totalDiscount, setTotalDiscount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isActivated, setIsActivated] = useState(false);


  const [promotion, setPromotion] = useState({
    startDate: "",
    endDate: "",
    discountPercentage: "",
    weekdaysOnly: false,
    endDateCondition: "",
    rentalDuration: "",
    lastMinuteValidity: "",
    lastMinuteReduction: "",
    lastMinuteActivated: false
  });
  // load voucher data while editing
  useEffect(() => {
    if (id) {
      const getVoucher = async () => {
        try {
          const res = await baseURL('/voucher/getbyId-vouchers/' + id)
          const { data: { voucher } } = res;
          console.log(voucher);
          const { voucherName, totalDiscount, startDate, endDate, isActive } = voucher;
          setEndDate(endDate);
          setIsActivated(isActive);
          setStartDate(startDate);
          setVoucherName(voucherName);
          setTotalDiscount(totalDiscount);
        } catch (error) {
          console.log(error);
        }
      }
      getVoucher()
    }
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isActivated) {
      const voucherData = {
        voucherName,
        totalDiscount,
        startDate,
        endDate,
        isActive: isActivated,
        boatId
      };
      if (!id) {
        try {
          console.log("voucherData", voucherData)
          await createVoucher(voucherData); // Use context function to create voucher
          toast.success("Voucher created successfully");
        } catch (error) {
          toast.error("Failed to create voucher");
        }
      } else {
        try {
          const res = await baseURL.patch('/voucher/update-vouchers/' + id, { ...voucherData, boatId: id })
          toast.success('Voucher updated successfully');
          localStorage.removeItem('id')
          // setEquipment({ ...res.data.equipment })
        } catch (error) {
          toast.error('Failed to update equipments')
        }
      }
    }
  };

  const handlePromotionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPromotion(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handlePromotionSubmit = async (e) => {
    e.preventDefault();
    // handle promotion creation API call here if needed
    toast.success("Promotion added successfully");
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white" onSubmit={handleSubmit}>
        <div className="mx-8 py-8 flex flex-col gap-10 text-[#4B465C] w-[80%]">
          <div className="font-medium">Voucher</div>
          <div className="text-sm">You can create voucher for customers.</div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label>Voucher Name</label>
              <input
                type="text"
                placeholder="Name"
                className="border py-2 px-3 rounded-md"
                value={voucherName}
                onChange={(e) => setVoucherName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Total Discount Percentage</label>
              <select
                className="border py-2 px-3 rounded-md"
                value={totalDiscount}
                onChange={(e) => setTotalDiscount(e.target.value)}
              >
                <option value="">Select</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label>Start Date - End Date</label>
              <input
                type="date"
                placeholder="Choose a date"
                className="border py-2 px-3 rounded-md"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="date"
                placeholder="Choose a date"
                className="border py-2 px-3 rounded-md"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isActivated}
              onChange={(e) => setIsActivated(e.target.checked)}
            />
            <div>Activate voucher?</div>
          </div>
          <button
            type="submit"
            className="bg-[#CBA557] w-[15%] py-2 rounded-lg text-white font-semibold"
          >
            {id ? "Update" : "Create"} Voucher
          </button>
        </div>
      </form>

      <form className="bg-white" onSubmit={handlePromotionSubmit}>
        <div className="w-[100%] h-0.5 bg-[#E8E8E8]"></div>
        <div className="mx-8 py-8 flex flex-col gap-5 text-[#4B465C] w-[80%]">
          <div className="flex flex-col gap-4">
            <div>Promotions</div>
            <div className="text-sm font-light">
              Promotions allow you to apply a discount in the periods you
              select. Select dates and discount amount: these will automatically
              be applied to the final price for all requests relating to the
              chosen period.
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label>Start Date - End Date</label>
                <input
                  type="date"
                  name="startDate"
                  placeholder="Choose a date"
                  className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light"
                  value={promotion.startDate}
                  onChange={handlePromotionChange}
                />
                <input
                  type="date"
                  name="endDate"
                  placeholder="Choose a date"
                  className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light"
                  value={promotion.endDate}
                  onChange={handlePromotionChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Discount Percentage</label>
                <select
                  name="discountPercentage"
                  className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light"
                  value={promotion.discountPercentage}
                  onChange={handlePromotionChange}
                >
                  <option value="">Select</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-[#CBA557] text-sm font-normal">
                Add Conditions
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="weekdaysOnly"
                  checked={promotion.weekdaysOnly}
                  onChange={handlePromotionChange}
                />
                <div className="text-sm">
                  Apply only during the week (weekends excluded)
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 w-[48%]">
              <div className="flex flex-col gap-2 text-sm">
                <label>Add an end date</label>
                <input
                  type="date"
                  name="endDateCondition"
                  placeholder="Choose a date"
                  className="border py-2 px-3 rounded-md text-[#4B465C] font-light"
                  value={promotion.endDateCondition}
                  onChange={handlePromotionChange}
                />
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <label>Rental duration</label>
                <select
                  name="rentalDuration"
                  className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light"
                  value={promotion.rentalDuration}
                  onChange={handlePromotionChange}
                >
                  <option value="">Select</option>
                  <option value="Half Day Morning/Evening, Full Day">
                    Half Day Morning/Evening, Full Day
                  </option>
                </select>
              </div>
            </div>
            <button className="bg-[#CBA557] w-[15%] py-2 rounded-lg text-white font-semibold">
              Add
            </button>
            <div className="flex flex-col gap-5">
              <div>My Promotions</div>
              <div className=" w-[80%] flex flex-col gap-5">
                <div className="flex justify-between">
                  <div>
                    <div>Discount 5%</div>
                    <div className="text-sm text-[#8881a0]">
                      15 Dec 2024 to 15 Jan 2025
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                      Edit
                    </button>
                    <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div>Discount 5%</div>
                    <div className="text-sm text-[#8881a0]">
                      15 Dec 2024 to 15 Jan 2025
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                      Edit
                    </button>
                    <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <div>Discount 5%</div>
                    <div className="text-sm text-[#8881a0]">
                      15 Dec 2024 to 15 Jan 2025
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                      Edit
                    </button>
                    <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-0.5 bg-[#E8E8E8]"></div>
        <div className="mx-8 py-8 flex flex-col gap-5 text-[#4B465C] w-[90%]">
          <div>Last minute promotions</div>
          <div className="text-sm ">
            The last minute promotion allows you to apply a discount if your
            boat is not rented. This reduction applies only to the period of
            your choice.
          </div>

          <div className="w-[80%] grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <label>Validity of the promotion</label>
              <select
                name="lastMinuteValidity"
                className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light"
                value={promotion.lastMinuteValidity}
                onChange={handlePromotionChange}
              >
                <option value="">Select</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Reduction percentage</label>
              <select
                name="lastMinuteReduction"
                className="border py-2 px-3 rounded-md text-[#4B465C] text-sm font-light"
                value={promotion.lastMinuteReduction}
                onChange={handlePromotionChange}
              >
                <option value="">Select</option>
                <option value="10%">10%</option>
                <option value="20%">20%</option>
                <option value="30%">30%</option>
                <option value="40%">40%</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="lastMinuteActivated"
                checked={promotion.lastMinuteActivated}
                onChange={handlePromotionChange}
              />
              <div>Activate?</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Voucher;
