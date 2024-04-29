import Pickups from './DashboardCards/Pickups';
import Statistics from './DashboardCards/Statistics';

const Dashboard = () => {
  return (
    <div>
      <Statistics />
      <div className="flex gap-5 flex-col md:flex-row">
        <Pickups title="Recent Booking" opt3="Last 3 Days" />
        <Pickups title="Pickups" opt3="Next 3 Days" />
      </div>
    </div>
  );
};
export default Dashboard;
