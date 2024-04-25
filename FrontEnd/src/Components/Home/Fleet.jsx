import FleetCard from './FleetCard';
import fleetBoat1 from '../../assets/Images/fleetBoat1.webp';
import fleetBoat2 from '../../assets/Images/fleetBoat2.webp';
import fleetBoat3 from '../../assets/Images/fleetBoat3.webp';

const Fleet = () => {
  return (
    <section className="flex flex-col items-center justify-center my-12 mx-[3%] md:mx-[6%]">
      <h1 className="text-[var(--primary-color)] text-base font-semibold ">
        View our
      </h1>
      <h1 className="text-3xl font-medium text-black mb-6">Fleet</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <FleetCard
          boatImg={fleetBoat1}
          title="Lady Gio - Inflatable Boat Tornado 525 Fasty"
          numberOfPersons={8}
          length="5.4 Meters"
          power="40 HP"
          licenseRequired="No"
        />

        <FleetCard
          boatImg={fleetBoat2}
          title="Annina Open Sea Boat Ghost 550"
          numberOfPersons={6}
          length="5.4 Meters"
          power="40 HP"
          licenseRequired="No"
        />
        <FleetCard
          boatImg={fleetBoat3}
          title="Super Mario Sessa Key Wide 16"
          numberOfPersons={5}
          length="5.4 Meters"
          power="40 HP"
          licenseRequired="No"
        />
      </div>
    </section>
  );
};
export default Fleet;
