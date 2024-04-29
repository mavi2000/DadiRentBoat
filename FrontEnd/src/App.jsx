import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./assets/styles/variables.css";
import "./assets/styles/hero-bgs.css";
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
import RecreationalVehicleRentalAgreement from "./Components/RecreationalVehicleRentalAgreement";
import AccountSetting from "./Components/LoginSignupPopups/AccountSetting";
import MyFavourite from "./Components/AfterLoggedIn/Favourites/MyFavourite";
import AccountInfo from "./Components/AfterLoggedIn/AccountInfo/AccountInfo";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardLayout from "./Components/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/user/booking-list" element={<Booking />} />
        <Route path="/user/booking" element={<Booking2 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Forgot-Password" element={<ForgotPassword />} />
        <Route path="/Check-email" element={<CheckEmail />} />
        <Route path="/Reset-Password" element={<ResetPassword />} />
        <Route
          path="/accounts"
          element={<Layout Children={<AccountSetting />} isLocation={false} />}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
