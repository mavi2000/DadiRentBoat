import React, { useState, useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Download from "../../../assets/Images/Download-Cloud.png";
import BoatsNavbar from "./BoatsNavbar";
import LoadingSpinner from "./LoadingSpinner";
import { AdminContext } from "../../../../Context/AdminContext";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BoatDocuments = () => {
  const { t } = useTranslation();
  const [documents, setDocuments] = useState({
    vesselDocument: [],
    boatManual: [],
    engineDocument: [],
    motorInsurance: [],
    portAuthorityPermit: [],
    meloriaShoalsDocuments: [],
  });
  const [loading, setLoading] = useState(false);

  const { uploadBoatDocuments } = useContext(AdminContext);

  const handleFileChange = (event, category) => {
    const files = Array.from(event.target.files);
    setDocuments((prevDocs) => ({
      ...prevDocs,
      [category]: [...prevDocs[category], ...files],
    }));
  };

  const handleDelete = (category, index) => {
    setDocuments((prevDocs) => ({
      ...prevDocs,
      [category]: prevDocs[category].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.keys(documents).forEach((category) => {
      documents[category].forEach((file) => {
        formData.append(category, file);
      });
    });

    setLoading(true);
    try {
      await uploadBoatDocuments(formData);
      toast.success(t("boatDocumentsUploadedSuccess"));
      setDocuments({
        vesselDocument: [],
        boatManual: [],
        engineDocument: [],
        motorInsurance: [],
        portAuthorityPermit: [],
        meloriaShoalsDocuments: [],
      });
    } catch (error) {
      console.error("Error uploading documents:", error);
      toast.error(t("boatDocumentsUploadFailed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BoatsNavbar />
      <div className="mx-[1%] my-[1%] bg-white h-[100vh]">
        <div className="mx-[4%]">
          <h1 className="font-medium text-[#4B465C] text-lg py-5">{t("boatDocuments")}</h1>
          <p className="text-[#4B465C] font-normal text-sm">
            {t("boatDocumentsDescription")}
          </p>
          <div className="flex flex-wrap gap-3 justify-between mx-[3%] my-[2%]">
            {Object.keys(documents).map((category) => (
              <div key={category} className="boatPhoto py-12 rounded-md flex-1 mx-2 bg-white shadow-lg">
                <div className="flex flex-col py-8 gap-4 items-center justify-center">
                  <p>{t(`boat${category.charAt(0).toUpperCase() + category.slice(1)}`)}</p>
                  <img src={Download} alt="Download icon" className="w-16 md:w-24" />
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, category)}
                    style={{ display: "none" }}
                    id={`${category}Input`}
                    multiple
                    accept="application/pdf,image/*"
                  />
                  <button
                    onClick={() => document.getElementById(`${category}Input`).click()}
                    className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px]"
                  >
                    <FaPlus />
                    <p>{t("chooseFiles")}</p>
                  </button>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {documents[category].map((file, index) => (
                      <div key={index} className="relative">
                        {file.type.startsWith("image/") ? (
                          <img
                            src={URL.createObjectURL(file)}
                            alt="Selected"
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        ) : (
                          <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-md">
                            <p className="text-xs text-gray-700">{file.name}</p>
                          </div>
                        )}
                        <MdDelete
                          onClick={() => handleDelete(category, index)}
                          className="absolute top-0 right-0 text-red-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSubmit}
              className="flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px]"
            >
              <FaPlus />
              <p>{t("uploadDocuments")}</p>
            </button>
          </div>
          {loading && <LoadingSpinner />}
        </div>
      </div>
    </>
  );
};

export default BoatDocuments;
