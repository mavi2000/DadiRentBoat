import { useState, useEffect } from "react";
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
    phone: '',
    email: '',
    document: 'abc',
    members: 0,
    leaseStart: '',
    leaseEnd: '',
    leasePrice: 0,
    faithPlace: '',
    faithDate: ''
  })
  // useEffect to get the user data
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const getUser = async (id) => {
      try {
        const res = await baseURL('/get-user/' + id);
        const { username, email, phoneNumber = "", address = "", zip = "", state = "", country = "", dob = "" } = res.data.user;
        setData({ ...data, firstName: username.split(" ")[0], lastName: username.split(" ")[1], address, state, zip, country, phone: phoneNumber, email, dob: "20" + dob.split('/')[2] + "-" + dob.split('/')[0] + "-" + dob.split('/')[1] })
      } catch (error) {
        console.log(error);
      }
    }
    if (token) {
      const decoded = jwtDecode(token)
      getUser(decoded._id)
    }
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await baseURL.post('/rental/create-agreement', data)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error);
      toast.error('Failed to create agreement')
    }
  }
  return (
    <div className="bg-white px-[3%] md:px-[6%] py-8 text-[#4B465C]">
      <img src={logo} alt="logo" className="size-[150px] mx-auto" />
      <h1 className="text-center font-semibold text-2xl mt-12 uppercase ">
        PLEASURE VESSEL RENTAL AGREEMENT
      </h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-8" />
      <p className="text-lg mb-12">
        With this rental contract, the Lessee requests the company DaDi Rent
        Srls (lessor) to rent the Recreational Vessel to him , under the
        following conditions:
      </p>
      <p>
        TYPE OF BOAT <span className="text-red-500">*</span>
      </p>
      <p className="bg-[#F5F5F5] text-[#4B465C] border-[1px] border-[#DBDADE] w-full md:w-3/5 my-3 px-4 py-3 rounded-md">
        Annina - open seaghost 550
      </p>
      <p className="text-xs">Indicare il mezzo scelto per il noleggio</p>
      <form onSubmit={handleSubmit}>
        <LeseGereralInformation data={data} setData={setData} />
        <p className="text-lg mb-12">
          Copy or scan of the Lessee's identity document, with his consent, is
          acquired by the Lessor for the purposes indicated in the attached
          Personal Data Processing Information pursuant to current regulations.
        </p>
        <TakePhoto />
        <CrewGuestList data={data} setData={setData} />
        <LeaseDuration data={data} setData={setData} />
        <Prize data={data} setData={setData} />
        <CurrentChareges />
        <Table />
        <SectionBelowTable data={data} setData={setData} />
        <Verification />
        <LastSection />
      </form>
    </div>
  );
};
export default RecreationalVehicleRentalAgreement;
