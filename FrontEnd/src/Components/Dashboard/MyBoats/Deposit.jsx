import React, { useContext, useEffect, useState } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import baseURL from "../../../../APi/BaseUrl";
import { useTranslation } from "react-i18next";

const Deposit = () => {
  const id = localStorage.getItem("id");
  const { damageDeposit, boatId, navigate } = useContext(AdminContext);
  const { t } = useTranslation();
  const [checkbox, setCheckbox] = useState(false);
  const [toggleSkipperDeposit, setToggleSkipperDeposit] = useState(false);
  const [depositData, setDepositData] = useState({
    type: [],
    amount: "",
    withoutSkipper: "",
    withSkipper: "",
    guaranteeAmount: "",
    manageDeposit: "",
  });

  useEffect(() => {
    if (id) {
      const getDeposit = async () => {
        try {
          const res = await baseURL("/demage/get-damage-deposit/" + id);
          const {
            data: { deposit },
          } = res;
          setDepositData(deposit);
        } catch (error) {
          console.log(error);
        }
      };
      getDeposit();
    }
  }, [id, boatId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "type") {
      setDepositData((prevState) => {
        const types = checked
          ? [...prevState.type, value]
          : prevState.type.filter((t) => t !== value);
        return {
          ...prevState,
          type: types,
        };
      });
    } else {
      setDepositData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleCheckbox = (event) => {
    setCheckbox(event.target.checked);
    if (event.target.checked) {
      setDepositData({
        type: [],
        amount: "",
        withoutSkipper: "",
        withSkipper: "",
        guaranteeAmount: "",
        manageDeposit: "",
      });
    }
  };

  const handleSkipperToggle = (event) => {
    setToggleSkipperDeposit(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...depositData, boatId };
    if (checkbox) {
      dataToSubmit.type = [];
      dataToSubmit.amount = "";
    }
    if (!id) {
      try {
        await damageDeposit(dataToSubmit);
        toast.success(t("DepositSuccessMessage"));
        setDepositData({
          type: [],
          amount: "",
          withoutSkipper: "",
          withSkipper: "",
          guaranteeAmount: "",
          manageDeposit: "",
        });
        setCheckbox(false);
      } catch (error) {
        if (error.response) {
          console.error("Error Response:", error.response);
          toast.error(`Error: ${error.response.data.message || error.message}`);
        } else {
          console.error("Error:", error);
          toast.error(t("UnexpectedError"));
        }
      }
    } else {
      try {
        const res = await baseURL.patch(
          "/demage/update-damage-deposit/" + id,
          dataToSubmit
        );
        toast.success(t("DepositUpdateSuccessMessage"));
        localStorage.removeItem("id");
        setTimeout(() => {
          navigate("/Dashboard/my-boats");
        }, 3000);
      } catch (error) {
        toast.error(t("DepositUpdateErrorMessage"));
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <div className="bg-white mx-2 py-8 mb-10 px-4 sm:px-12 flex flex-col gap-10 text-[#4B465C]">
        <div className="font-medium">{t("DepositDamageDeposit")}</div>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={checkbox}
              onChange={handleCheckbox}
            />
            <div className="font-light">{t("DepositNoSecurityDeposit")}</div>
          </div>

          {!checkbox && (
            <>
              <div className="flex flex-col gap-2">
                <div className="font-light">{t("DepositSecurityDeposit")}</div>
                <div className="border w-[30%] rounded-md flex items-center">
                  <input
                    className="px-3 w-[80%] py-3 bg-transparent"
                    name="amount"
                    type="number"
                    placeholder={t("DepositEnter")}
                    value={depositData.amount}
                    onChange={handleChange}
                  />
                  <span className="px-3">€</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={toggleSkipperDeposit}
                  onChange={handleSkipperToggle}
                />
                <div className="text-sm font-light">
                  {t("DepositDifferentDepositWithSkipper")}
                </div>
              </div>

              {toggleSkipperDeposit && (
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2">
                    <div className="font-light">
                      {t("DepositWithSkipper")}
                    </div>
                    <div className="border rounded-md flex items-center w-[350px]">
                      <input
                        className="px-3 w-[80%] py-3 bg-transparent"
                        name="withSkipper"
                        type="number"
                        placeholder={t("DepositEnter")}
                        value={depositData.withSkipper}
                        onChange={handleChange}
                      />
                      <span className="px-3">€</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <div className="font-light">
                  {t("DepositWithoutSkipper")}
                </div>
                <div className="border relative rounded-md flex items-center px-3">
                  <input
                    className="px-3 py-3 outline-none bg-transparent"
                    name="withoutSkipper"
                    type="number"
                    placeholder={t("DepositEnter")}
                    value={depositData.withoutSkipper}
                    onChange={handleChange}
                  />
                  <span className=" absolute right-2">€</span>
                </div>
              </div>

              <p className="bg-orange-100 font-light p-auto rounded text-center px-4 py-4">
                {t("DepositLowAmountWarning")}
              </p>

              <div className="flex items-start gap-4 font-light">
                <input
                  type="radio"
                  name="manageDeposit"
                  value="directly"
                  onChange={handleChange}
                  checked={depositData.manageDeposit === "directly"}
                  className="mt-1"
                />
                <div>
                  <div className="font-light">
                    {t("DepositManagedDirectly")}
                  </div>
                  <div className="font-light">
                    {t("DepositReduceRiskMessage")}
                  </div>
                </div>
              </div>

              {depositData.manageDeposit === "directly" && (
                <div className="flex flex-col gap-3 pl-8 ">
                  <div className="font-light">
                    {t("DepositBondTypes")}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="type"
                      value="Check"
                      onChange={handleChange}
                      checked={depositData.type.includes("Check")}
                    />
                    <label className="font-light">{t("DepositCheck")}</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="type"
                      value="Cash"
                      onChange={handleChange}
                      checked={depositData.type.includes("Cash")}
                    />
                    <label className="font-light">{t("DepositCash")}</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="type"
                      value="Pre-Authorization"
                      onChange={handleChange}
                      checked={depositData.type.includes("Pre-Authorization")}
                    />
                    <label className="font-light">{t("DepositPreAuthorization")}</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="type"
                      value="Other"
                      onChange={handleChange}
                      checked={depositData.type.includes("Other")}
                    />
                    <label className="font-light">{t("DepositOther")}</label>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <input
                  type="radio"
                  name="manageDeposit"
                  value="DadiRent"
                  onChange={handleChange}
                  checked={depositData.manageDeposit === "DadiRent"}
                  className="mt-1"
                />
                <div>
                  <div className="font-light">
                    {t("DepositManagedByDadiRent")}
                  </div>
                  <div className="font-light">{t("DepositViaBankPreAuthorization")}</div>
                </div>
              </div>

              {depositData.manageDeposit === "DadiRent" && (
                <div className="p-2 rounded">
                  <p className="bg-blue-100 p-2 rounded font-light text-center m-auto ">
                    {t("DepositDadiRentServiceMessage")}
                  </p>
                  <div className="flex flex-col gap-3 mt-3 ">
                    <div className="font-light mt-10">
                      {t("DepositDadiRentGuaranteeAmount")}
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="guaranteeAmount"
                        value="0"
                        onChange={handleChange}
                        checked={depositData.guaranteeAmount === "0"}
                      />
                      <label className="font-light">
                        {t("DepositGuaranteeAmount0")}
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="guaranteeAmount"
                        value="1000"
                        onChange={handleChange}
                        checked={depositData.guaranteeAmount === "1000"}
                      />
                      <label className="font-light">
                        {t("DepositGuaranteeAmount1000")}
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="guaranteeAmount"
                        value="2000"
                        onChange={handleChange}
                        checked={depositData.guaranteeAmount === "2000"}
                      />
                      <label className="font-light">
                        {t("DepositGuaranteeAmount2000")}
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="guaranteeAmount"
                        value="5000"
                        onChange={handleChange}
                        checked={depositData.guaranteeAmount === "5000"}
                      />
                      <label className="font-light">
                        {t("DepositGuaranteeAmount5000")}
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            className="bg-[#CBA557] py-4 sm:w-max px-6 rounded-lg text-white"
          >
            {id ? t("DepositUpdateButton") : t("DepositSaveButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
