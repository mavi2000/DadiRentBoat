import Pickups from "./DashboardCards/Pickups";
import Reservations from "./DashboardCards/Reservations";
import RevenueChart from "./DashboardCards/RevenueChart";
import Statistics from "./DashboardCards/Statistics";

const Dashboard = () => {
  return (
    <div>
      <Statistics />
      <div className=" grid grid-cols-7 gap-5 my-4">
        <div className=" col-span-7 md:col-span-4">
          <RevenueChart />
        </div>
        <div className=" col-span-7 md:col-span-3">
          <Reservations />
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row my-4">
        <Pickups title="Recent Booking" opt3="Last 3 Days" />
        {/* <Pickups title="Pickups" opt3="Next 3 Days" /> */}
      </div>
    </div>
  );
};
export default Dashboard;
