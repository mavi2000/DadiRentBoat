import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import BookNow from "./Components/BookNow/BookNow";
import Checkout from "./Components/Checkout/Checkout";
import Layout from "./Components/Layout";
import FAQ from "./Components/FAQ/FAQ";
import Services from "./Components/Services/Services";
import OurFleet from "./Components/OurFleet/OurFleet";
import BoatDinghal from "./Components/Services/BoatDinghal";
import Excursions from "./Components/Excursions/Excursions";
import StandardPlus from "./Components/Excursions/StandardPlus";
import TheGreatWar from "./Components/Excursions/TheGreatWar";
import IntoTheWild from "./Components/Excursions/IntoTheWild";
import TheSeaInYourVeins from "./Components/Excursions/TheSeaInYourVeins";
import FishingTrips from "./Components/Services/FishingTrips";
import Aperitif from "./Components/Services/Aperitif";
import Rates from "./Components/Rates/Rates";
import WhereWeAre from "./Components/WhereWeAre/WhereWeAre";
import ContactInformation from "./Components/ContactInformation";
import Condition from "./Components/Condition/Condition";
import Invoice from "./Components/Invoice/Invoice";
import Booking2 from "./Components/AfterLoggedIn/Booking/Booking2";
import Booking from "./Components/AfterLoggedIn/Booking/Booking";
import Login from "./Components/LoginSignupPopups/Login";
import SignUp from "./Components/LoginSignupPopups/SignUp";
import ForgotPassword from "./Components/LoginSignupPopups/ForgotPassword";
import CheckEmail from "./Components/LoginSignupPopups/CheckEmail";
import ResetPassword from "./Components/LoginSignupPopups/ResetPassword";
import TwoStepVerification from "./Components/LoginSignupPopups/TwoStepVerification";
import RecreationalVehicleRentalAgreement from "./Components/RecreationalVehicleRentalAgreement/RecreationalVehicleRentalAgreement";
import AccountSetting from "./Components/LoginSignupPopups/AccountSetting";
import MyFavourite from "./Components/AfterLoggedIn/Favourites/MyFavourite";
import AccountInfo from "./Components/AfterLoggedIn/AccountInfo/AccountInfo";
import DashboardLayout from "./Components/DashboardLayout";
import CreateList from "./Components/Dashboard/Calendar/CreateList/CreateList";
import MyBoats from "./Components/Dashboard/MyBoats/MyBoats";
import BillingList from "./Components/Dashboard/Billing/BillingList";
import Dashboard from "./Components/Dashboard/Dashboard";

import PendingBookings from "./Components/Dashboard/Bookings/PendingBookings";
import TodayBooking from "./Components/Dashboard/Bookings/TodayBooking";
import UpcomingBooking from "./Components/Dashboard/Bookings/UpcomingBooking";
import PreviousBooking from "./Components/Dashboard/Bookings/PreviousBooking";
import Reminders from "./Components/Dashboard/Remainder/Reminders";
import BookedBoats from "./Components/Dashboard/Remainder/BookedBoats";
import UnbookedBoats from "./Components/Dashboard/Remainder/UnbookedBoats";
import Calender from "./Components/Dashboard/Calendar/Calender";
import CashFlow from "./Components/Dashboard/CashFlow/CashFlow";
import BoatDetails from "./Components/Dashboard/CashFlow/BoatDetails";
import Customer from "./Components/Dashboard/CustomerSupport/Customer";
import Profile from "./Components/Dashboard/Profile/Profile";
import { AuthProvider } from "../Context/AuthContext";
import { AdminProvider } from "../Context/AdminContext";
import Overview from "./Components/Dashboard/MyBoats/Overview";
import { ToastContainer } from "react-toastify";
import Photo from "./Components/Dashboard/MyBoats/Photo";
import "react-toastify/dist/ReactToastify.css";
import InfoAccess from "./Components/Dashboard/MyBoats/InfoAccess.jsx";
import "../styles/variables.css";
import Information from "./Components/Dashboard/MyBoats/Information.jsx";
import TermsCondition from "./Components/Dashboard/MyBoats/TermsCondition.jsx";
import BoatRates from "./Components/Dashboard/MyBoats/BoatRates.jsx";
import Voucher from "./Components/Dashboard/MyBoats/Voucher.jsx";
import BoatCalender from "./Components/Dashboard/MyBoats/BoatCalender.jsx";
import Deposit from "./Components/Dashboard/MyBoats/Deposit.jsx";
import ExtraServices from "./Components/Dashboard/MyBoats/ExtraServices.jsx";
import Insurance from "./Components/Dashboard/MyBoats/Insurance.jsx";
import Address from "./Components/Dashboard/MyBoats/Address.jsx";
import Equipments from "./Components/Dashboard/MyBoats/Equipments.jsx";

//new commit
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <AdminProvider>
          <Routes>
            <Route
              path="/"
              element={<Layout Children={<Home />} isLocation={false} />}
            />
            <Route
              path="/book-now"
              element={<Layout Children={<BookNow />} isLocation={true} />}
            />
            <Route
              path="/check-out"
              element={<Layout Children={<Checkout />} isLocation={true} />}
            />
            <Route
              path="/Our-Fleet"
              element={<Layout Children={<OurFleet />} isLocation={true} />}
            />
            <Route
              path="/faq"
              element={<Layout Children={<FAQ />} isLocation={true} />}
            />
            <Route
              path="/services"
              element={<Layout Children={<Services />} isLocation={true} />}
            />
            <Route
              path="/services/Excursions"
              element={<Layout Children={<Excursions />} isLocation={true} />}
            />
            <Route
              path="/services/Standard-Plus"
              element={<Layout Children={<StandardPlus />} isLocation={true} />}
            />
            <Route
              path="/services/The-Great-War"
              element={<Layout Children={<TheGreatWar />} isLocation={true} />}
            />
            <Route
              path="/services/Into-The-Wild"
              element={<Layout Children={<IntoTheWild />} isLocation={true} />}
            />
            <Route
              path="/services/The-Sea-In-Your-Veins"
              element={
                <Layout Children={<TheSeaInYourVeins />} isLocation={true} />
              }
            />
            <Route
              path="/services/Fishing-Trips"
              element={<Layout Children={<FishingTrips />} isLocation={true} />}
            />
            <Route
              path="/services/Aperitif"
              element={<Layout Children={<Aperitif />} isLocation={false} />}
            />
            <Route
              path="/boat-dinghal"
              element={<Layout Children={<BoatDinghal />} isLocation={true} />}
            />
            <Route
              path="/Rates"
              element={<Layout Children={<Rates />} isLocation={false} />}
            />
            <Route
              path="/where-we-are"
              element={<Layout Children={<WhereWeAre />} isLocation={true} />}
            />
            <Route
              path="/Contact-Information"
              element={
                <Layout Children={<ContactInformation />} isLocation={true} />
              }
            />
            <Route
              path="/booking/conditions"
              element={<Layout Children={<Condition />} isLocation={false} />}
            />
            <Route
              path="/booking/invoice"
              element={<Layout Children={<Invoice />} isLocation={false} />}
            />
            <Route
              path="/booking/extra-services"
              element={<Layout Children={<Invoice />} isLocation={false} />}
            />
            <Route path="/user/booking-list" element={<Booking />} />
            <Route path="/user/booking" element={<Booking2 />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Forgot-Password" element={<ForgotPassword />} />
            <Route path="/Check-email" element={<CheckEmail />} />
            <Route path="/Reset-Password" element={<ResetPassword />} />
            <Route
              path="/accounts"
              element={
                <Layout Children={<AccountSetting />} isLocation={false} />
              }
            />
            <Route
              path="/Two-Step-Verification"
              element={<TwoStepVerification />}
            />
            <Route
              path="/RecreationalVehicleRentalAgreement"
              element={<RecreationalVehicleRentalAgreement />}
            />
            <Route
              path="/booking/invoice"
              element={<Layout Children={<Invoice />} isLocation={false} />}
            />
            <Route
              path="/user/booking-list"
              element={<Layout Children={<Booking />} isLocation={false} />}
            />
            <Route
              path="/user/booking"
              element={<Layout Children={<Booking2 />} isLocation={false} />}
            />
            <Route
              path="/user/favourites"
              element={<Layout Children={<MyFavourite />} isLocation={false} />}
            />
            <Route
              path="/user/account-info"
              element={<Layout Children={<AccountInfo />} isLocation={false} />}
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Forgot-Password" element={<ForgotPassword />} />
            <Route path="/Check-email" element={<CheckEmail />} />
            <Route path="/Reset-Password" element={<ResetPassword />} />
            <Route
              path="/Two-Step-Verification"
              element={<TwoStepVerification />}
            />
            <Route
              path="/RecreationalVehicleRentalAgreement"
              element={<RecreationalVehicleRentalAgreement />}
            />
            <Route
              path="/Dashboard"
              element={<DashboardLayout Childeren={<Dashboard />} />}
            />
            <Route
              path="/Dashboard/my-boats"
              element={<DashboardLayout Childeren={<MyBoats />} />}
            />
            <Route
              path="/Dashboard/my-boats/overview"
              element={<DashboardLayout Childeren={<Overview />} />}
            />
            <Route
              path="/Dashboard/my-boats/photo"
              element={<DashboardLayout Childeren={<Photo />} />}
            />
            <Route
              path="/Dashboard/my-boats/gu"
              element={<DashboardLayout Childeren={<InfoAccess />} />}
            />
            <Route
              path="/Dashboard/my-boats/information"
              element={<DashboardLayout Childeren={<Information />} />}
            />{" "}
            <Route
              path="/Dashboard/my-boats/info-access"
              element={<DashboardLayout Childeren={<InfoAccess />} />}
            />
            <Route
              path="/Dashboard/my-boats/termscondition"
              element={<DashboardLayout Childeren={<TermsCondition />} />}
            />
            <Route
              path="/Dashboard/my-boats/deposit"
              element={<DashboardLayout Childeren={<Deposit />} />}
            />
            <Route
              path="/Dashboard/my-boats/promotion"
              element={<DashboardLayout Childeren={<Voucher />} />}
            />
            <Route
              path="/Dashboard/my-boats/insurance"
              element={<DashboardLayout Childeren={<Insurance />} />}
            />
            <Route
              path="/Dashboard/my-boats/address"
              element={<DashboardLayout Childeren={<Address />} />}
            />
            <Route
              path="/Dashboard/my-boats/equipments"
              element={<DashboardLayout Childeren={<Equipments />} />}
            />
            <Route
              path="/Dashboard/my-boats/extra-services"
              element={<DashboardLayout Childeren={<ExtraServices />} />}
            />
            <Route
              path="/Dashboard/my-boats/calender"
              element={<DashboardLayout Childeren={<BoatCalender />} />}
            />
            <Route
              path="/Dashboard/my-boats/rates"
              element={<DashboardLayout Childeren={<BoatRates />} />}
            />
            <Route
              path="/Dashboard/calendar"
              element={<DashboardLayout Childeren={<Calender />} />}
            />
            <Route
              path="/Dashboard/pending-bookings"
              element={<DashboardLayout Childeren={<PendingBookings />} />}
            />
            <Route
              path="/Dashboard/today-bookings"
              element={<DashboardLayout Childeren={<TodayBooking />} />}
            />
            <Route
              path="/Dashboard/upcoming-bookings"
              element={<DashboardLayout Childeren={<UpcomingBooking />} />}
            />
            <Route
              path="/Dashboard/previous-bookings"
              element={<DashboardLayout Childeren={<PreviousBooking />} />}
            />
            <Route
              path="/Dashboard/reminders"
              element={<DashboardLayout Childeren={<Reminders />} />}
            />
            <Route
              path="/Dashboard/booked-boats"
              element={<DashboardLayout Childeren={<BookedBoats />} />}
            />
            <Route
              path="/Dashboard/unbooked-boats"
              element={<DashboardLayout Childeren={<UnbookedBoats />} />}
            />
            <Route
              path="/Billing"
              element={<DashboardLayout Childeren={<BillingList />} />}
            />
            <Route
              path="/Dashboard/calender/createlist"
              element={<DashboardLayout Childeren={<CreateList />} />}
            />
            <Route
              path="/Dashboard/billing"
              element={<DashboardLayout Childeren={<BillingList />} />}
            />
            <Route
              path="/Dashboard/Cash-flow"
              element={<DashboardLayout Childeren={<CashFlow />} />}
            />
            <Route
              path="/Dashboard/Cash-flow/Boat-detials"
              element={<DashboardLayout Childeren={<BoatDetails />} />}
            />
            <Route
              path="/Dashboard/customer-support"
              element={<DashboardLayout Childeren={<Customer />} />}
            />
            <Route
              path="/Dashboard/profile"
              element={<DashboardLayout Childeren={<Profile />} />}
            />
          </Routes>
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
