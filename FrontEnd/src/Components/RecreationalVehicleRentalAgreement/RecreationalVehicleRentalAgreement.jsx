import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/Images/logo.png";
import CrewGuestList from "./CrewGuestList";
import CurrentChareges from "./CurrentChareges";
import LastSection from "./LastSection";
import LeaseDuration from "./LeaseDuration";
import LeseGereralInformation from "./LeseGereralInformation";
import Prize from "./Prize";
import SectionBelowTable from "./SectionBelowTable";
import Table from "./Table";
import TakePhoto from "./TakePhoto";
import Verification from "./Verification";
import baseURL from "../../../APi/BaseUrl";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const RecreationalVehicleRentalAgreement = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    userId: "123",
    firstName: '',
    lastName: '',
    dob: '',
    birthCity: '',
    birthProvince: '',
    taxId: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '+923131528118',
    email: '',
    members: 0,
    leaseStart: '',
    leaseEnd: '',
    leasePrice: 0,
    faithPlace: '',
    faithDate: '', 
    docFront: "", 
    docBack: "", 
    valid: false
  });

  const formRef = useRef(); 

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const getUser = async (id) => {
      try {
        const res = await baseURL('/get-user/' + id);
        const { username, email, phoneNumber = "", address = "", zip = "", state = "", country = "", dob = "" } = res.data.user;
        setData({ ...data, userId: id, firstName: username.split(" ")[0], lastName: username.split(" ")[1], address, state, zip, country, email, dob: "20" + dob.split('/')[2] + "-" + dob.split('/')[0] + "-" + dob.split('/')[1] });
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      const decoded = jwtDecode(token);
      getUser(decoded._id);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    console.log("formData", formData);
    
    for (const key in data) {
      if (key === 'docFront' || key === 'docBack') {
        // Append the file object directly
        if (data[key]) {
          formData.append(key, data[key]); // No need for [0] since it’s already a single file
        }
      } else {
        formData.append(key, data[key]);
      }
    }
  
    // Log the formData contents
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }
  
    try {
      const res = await baseURL.post('/rental/create-agreement', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
  
      console.log('Response:', res.data); // Log the response from the server
  
      // Display success message using the correct data
      toast.success(res.data.message);
  
      // Reset form fields after successful submission (optional)
      setData({
        userId: '',
        firstName: '',
        lastName: '',
        dob: '',
        birthCity: '',
        birthProvince: '',
        taxId: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: '',
        email: '',
        members: '',
        leaseStart: '',
        leaseEnd: '',
        leasePrice: '',
        faithPlace: '',
        faithDate: '',
        docFront: null,
        docBack: null,
        valid: false
      });
  
    } catch (error) {
      console.log('Error:', error); // Log the error object
      toast.error('Failed to create agreement');
    }
  };


  return (
    <div className="bg-white px-[3%] md:px-[6%] py-8 text-[#4B465C]">
      <img src={logo} alt="logo" className="size-[150px] mx-auto" />
      <h1 className="text-center font-semibold text-2xl mt-12 uppercase">
        {t('pleasureVesselRentalAgreementTitleUnique')}
      </h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-8" />
      <p className="text-lg mb-12">
        {t('rentalAgreementIntroUnique')}
      </p>
      <p>
        {t('typeOfBoatLabelUnique')} <span className="text-red-500">*</span>
      </p>
      <p className="bg-[#F5F5F5] text-[#4B465C] border-[1px] border-[#DBDADE] w-full md:w-3/5 my-3 px-4 py-3 rounded-md">
        {t('anninaBoatDescriptionUnique')}
      </p>
      <p className="text-xs">{t('boatSelectionNoteUnique')}</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <LeseGereralInformation data={data} setData={setData} />
        <p className="text-lg mb-12">
          {t('lesseeDocumentCopyNoteUnique')}
        </p>
        <TakePhoto data={data} setData={setData} />
        <CrewGuestList data={data} setData={setData} />
        <LeaseDuration data={data} setData={setData} />
        <Prize data={data} setData={setData} />
        <CurrentChareges />
        <Table />
        <SectionBelowTable data={data} setData={setData} />
        <Verification data={data} setData={setData} />
        <LastSection pageRef={formRef} data={data} />
        
        
      </form>
    </div>
  );
};

export default RecreationalVehicleRentalAgreement;
