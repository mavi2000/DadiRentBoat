import { DonutChart } from "@tremor/react";
import { useTranslation } from 'react-i18next';

const data = [
  {
    name: "confirmedReservation",
    amount: 43,
    share: "32.1%",
    color: "cyan",
  },
  {
    name: "pendingReservation",
    amount: 54,
    share: "19.6%",
    color: "blue",
  },
  {
    name: "cancelledReservation",
    amount: 34,
    share: "18.6%",
    color: "indigo",
  },
];

const currencyFormatter = (number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};

const Reservations = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-md shadow-lg px-4 sm:px-8 py-4">
      <h2 className="text-[#4b465cd4] font-medium text-lg">{t('reservationsTitle')}</h2>
      <div className="grid grid-cols-1 gap-4 mt-8">
        <div>
          <DonutChart
            className=""
            data={data}
            category="amount"
            index="name"
            valueFormatter={currencyFormatter}
            showTooltip={false}
            colors={["cyan", "blue", "indigo"]}
          />
        </div>
        <div className="flex flex-col gap-3 whitespace-nowrap">
          {data.map((data, index) => (
            <div key={index}>
              <h1 className="text-lg text-[#364A63]">{data.amount}</h1>
              <div className="flex items-center gap-1">
                <p
                  className={`size-[12px] rounded-sm`}
                  style={{ background: data.color }}
                ></p>
                <p className="text-sm text-[#8094AE]">{t(data.name)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
