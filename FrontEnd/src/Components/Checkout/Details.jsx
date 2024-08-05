import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { useParams } from "react-router-dom";
import Payment from "./Payment";

const Details = ({ id }) => {
  console.log("id dwewq", id);
  const [boatDetails, setBoatDetails] = useState(null);
  const { fetchBoatDetailsById } = useContext(UserContext);
  // const [paymentOption, setPaymentOption] = useState('payAll');

  // const handleChange = (event) => {
  //   setPaymentOption(event.target.value);
  // };

  useEffect(() => {
    const getBoatDetails = async () => {
      try {
        console.log("Fetching boat details for ID:", id); // Log ID being used
        const details = await fetchBoatDetailsById(id);
        console.log("Boat details fetched:", details); // Log fetched details
        setBoatDetails(details);
      } catch (error) {
        console.error("Error fetching boat details:", error); // Log error
      }
    };

    if (id) {
      getBoatDetails();
    }
  }, [id, fetchBoatDetailsById]);

  console.log("boatDetails new detail", boatDetails);

  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-xl font-medium leading-7">General Information</h2>
      </div>

      {boatDetails ? (
        <div className="mt-[5%]">
          <div className="flex flex-wrap gap-4">
            <div className="input-checkout">
              <strong>Brand: </strong>
              {boatDetails.boat.brand}
            </div>
            <div className="input-checkout">
              <strong>Model: </strong>
              {boatDetails.boat.model}
            </div>
            <div className="input-checkout">
              <strong>Year: </strong>
              {boatDetails.boat.year}
            </div>
            <div className="input-checkout">
              <strong>Region: </strong>
              {boatDetails.boat.region}
            </div>
            <div className="input-checkout">
              <strong>Type: </strong>
              {boatDetails.boat.type}
            </div>
            <div className="input-checkout">
              <strong>Boarding Capacity: </strong>
              {boatDetails.boat.boardingCapacity}
            </div>
            <div className="input-checkout">
              <strong>Total Engine Power (HP): </strong>
              {boatDetails.boat.totalEnginePowerHP}
            </div>
            <div className="input-checkout">
              <strong>Fuel Tank (Liters): </strong>
              {boatDetails.boat.fuelTankLiters}
            </div>
            <div className="input-checkout">
              <strong>Water Tank (Liters): </strong>
              {boatDetails.boat.waterTankLiters}
            </div>
            <div className="input-checkout">
              <strong>Drought (Meters): </strong>
              {boatDetails.boat.droughtMeters}
            </div>
            <div className="input-checkout">
              <strong>Length (Meters): </strong>
              {boatDetails.boat.lengthMeters}
            </div>
            <div className="input-checkout">
              <strong>Telephone: </strong>
              {boatDetails.boat.telephone}
            </div>
                <Payment/>
          </div>
        </div>
      ) : (
        <p>Loading boat details...</p>
      )}
    </div>
  );
};

export default Details;
