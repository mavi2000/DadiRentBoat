import React, { useState, useEffect } from "react";
import baseURL from "../../../../APi/BaseUrl";
import { useTranslation } from "react-i18next";

const BillingLog = () => {
  const { t } = useTranslation();
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await baseURL.get("/checkout/getPayment");
        setBookings(response.data);
        setFilteredBookings(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      if (searchText) {
        setFilteredBookings(
          bookings.filter((booking) =>
            booking.boatName.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      } else {
        setFilteredBookings(bookings);
      }
    };

    applyFilters();
  }, [searchText, bookings]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <div>{t('BillingLoading')}</div>;
  }

  if (error) {
    return <div>{t('BillingError')}: {error}</div>;
  }

  return (
    <div className="my-8 flex flex-col justify-center items-center gap-3 bg-white w-full rounded-md shadow py-5 text-[#4b465cb4]">
      <div className="flex flex-row justify-between w-[97%]">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            required
            autoComplete="off"
            name="text"
            placeholder={t('BillingSearchInvoice')}
            className="border border-[#DBDADE] p-2 rounded-md text-sm"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="w-full border mt-4">
        <div className="gap-3 text-[#4B465C]">
          <div className="flex w-full">
            <div className="w-[10%] border-b border-[#DBDADE] p-3">{t('BillingID')}</div>
            <div className="w-[20%] border-b border-[#DBDADE] p-3">{t('BillingClient')}</div>
            <div className="w-[20%] border-b border-[#DBDADE] p-3">{t('BillingBoat')}</div>
            <div className="w-[10%] border-b border-[#DBDADE] p-3">{t('BillingDate')}</div>
            <div className="w-[15%] border-b border-[#DBDADE] p-3">{t('BillingAmountPaid')}</div>
            <div className="w-[15%] border-b border-[#DBDADE] p-3">{t('BillingTotalPaid')}</div>
            <div className="w-[10%] border-b border-[#DBDADE] p-3">{t('BillingBalance')}</div>
          </div>

          {currentBookings?.map((booking) => (
            <div key={booking._id} className="flex w-full">
              <div className="w-[10%] border-b border-[#DBDADE] p-3">
                #{booking?._id.slice(-7)}
              </div>
              <div className="flex items-center gap-2 w-[20%] border-b border-[#DBDADE] p-3">
                <div className="flex justify-center rounded-full bg-[#CBA55726] items-center w-8 h-8 text-[#CBA557]">
                  <div>{booking.userId?.username.charAt(0)}</div>
                  <div>{booking.userId?.username.charAt(1)}</div>
                </div>
                <div>
                  <div className="text-sm">{booking.userId?.username}</div>
                  <div className="text-xs text-[#a9a3ba]">
                    {booking.userId?.email}
                  </div>
                </div>
              </div>
              <div className="w-[20%] border-b border-[#DBDADE] p-3">
                {booking?.boatName}
              </div>
              <div className="w-[10%] border-b border-[#DBDADE] p-3">
                {new Date(booking.createdAt).toLocaleDateString()}
              </div>
              <div className="w-[15%] border-b border-[#DBDADE] p-3">
                ${booking.amount.toFixed(2)}
              </div>
              <div className="w-[15%] border-b border-[#DBDADE] p-3">
                ${booking.totalAmount.toFixed(2)}
              </div>
              <div className="w-[10%] border-b border-[#DBDADE] p-3">
                {booking.amount === booking.totalAmount ? (
                  <span className="text-green-500 font-bold">{t('BillingPaid')}</span>
                ) : (
                  <span className="text-red-500 font-bold">30%</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between w-[97%] mt-4">
        <div>
          {t('BillingShowing')} {indexOfFirstItem + 1} {t('BillingTo')} {indexOfLastItem} {t('BillingOf')} {filteredBookings.length} {t('BillingEntries')}
        </div>
        <div className="flex flex-row items-center justify-center gap-1 text-sm">
          <button
            className="bg-[#4B465C14] h-7 w-20 rounded-md"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {t('BillingPrevious')}
          </button>
          <div className="flex gap-1">
            {[...Array(Math.ceil(filteredBookings.length / itemsPerPage)).keys()].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page + 1)}
                className={`w-6 h-7 ${currentPage === page + 1 ? 'bg-[#CBA557]' : 'bg-[#4B465C14]'} flex justify-center items-center rounded-md`}
              >
                {page + 1}
              </button>
            ))}
          </div>
          <button
            className="bg-[#4B465C14] h-7 w-14 rounded-md"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredBookings.length / itemsPerPage)}
          >
            {t('BillingNext')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingLog;
