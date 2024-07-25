import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FleetCard from "./FleetCard";
import { UserContext } from "../../../Context/UserContext";

const Fleet = () => {
  const { fetchBoatDetails } = useContext(UserContext);
  const [boatDetails, setBoatDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBoatDetails = async () => {
      try {
        const details = await fetchBoatDetails();
        setBoatDetails(details);
      } catch (error) {
        setError(error.message || "Error loading boat details");
      }
    };

    getBoatDetails();
  }, [fetchBoatDetails]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!boatDetails.length) {
    return <div>Loading...</div>;
  }

  console.log("boatDetails", boatDetails);

  return (
    <section className="flex flex-col items-center justify-center my-12 mx-[3%] md:mx-[6%] ">
      <h1 className="text-[var(--primary-color)] text-base font-semibold ">
        View our
      </h1>
      <h1 className="text-3xl font-medium text-black mb-16">Fleet</h1>
      <div className="flex flex-wrap gap-4 w-full justify-center items-center">
        {boatDetails.map((boat, index) => (
          <FleetCard
            key={index}
            boatImg={boat.boatImages[0]?.avatar || 'default_image_path'}
            title={boat?.rental.map((item) => (item.BoatName)).join(", ")}
            numberOfPersons={boat.boat.boardingCapacity}
            length={boat.boat.lengthMeters}
            power={boat.boat.totalEnginePowerHP}
            licenseRequired={boat.boat.licenseRequired ? "Yes" : "No"}
            id={boat.boat._id}
            images={boat.boatImages[0]?.images || []} // Pass the array of images
          />
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Fleet;
