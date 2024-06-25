import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BoatsNavbar from './BoatsNavbar';
import { FaPlus, FaTimes } from "react-icons/fa";
import { AdminContext } from '../../../../Context/AdminContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseURL from '../../../../APi/BaseUrl';

const InfoAccess = () => {
  const id = localStorage.getItem('id')
  const { addBoatAccessInformation, boatId, navigate } = useContext(AdminContext);
  const [accessInfo, setAccessInfo] = useState([{ description: '', documentName: '', uploadDocument: null, documentLink: '' }]);
  // const navigate = useNavigate();

  useEffect(() => {
    setAccessInfo(prevState => prevState.map(info => ({ ...info, boatId })));
  }, [boatId]);
  // load existing data while editing
  useEffect(() => {
    if (id) {
      const getInfoAccess = async () => {
        try {
          const res = await baseURL('/boatAccess/get-access-info/' + id)
          const { data: { boatAccessInfo: { accessDetails } } } = res
          // setEquipment({ ...equipments })
          const details = accessDetails.map((item) => {
            const { description, documentLink, documentName, uploadDocument } = item;
            return { description, documentLink, documentName, uploadDocument }
          })
          setAccessInfo(details)
        } catch (error) {
          console.log(error);
        }
      }
      getInfoAccess()
    }
  }, [])
  const handleInputChange = (index, field, value) => {
    const updatedAccessInfo = [...accessInfo];
    updatedAccessInfo[index][field] = value;
    setAccessInfo(updatedAccessInfo);
  };

  const handleAddNewInfoAccess = () => {
    setAccessInfo([...accessInfo, { description: '', documentName: '', uploadDocument: null, documentLink: '' }]);
  };

  const handleRemoveInfoAccess = (index) => {
    const updatedAccessInfo = accessInfo.filter((_, i) => i !== index);
    setAccessInfo(updatedAccessInfo);
  };

  const handleSave = async () => {
    const formData = new FormData();

    accessInfo.forEach((info, index) => {
      formData.append(`accessDetails[${index}][description]`, info.description);
      formData.append(`accessDetails[${index}][documentName]`, info.documentName);
      if (info.uploadDocument) {
        formData.append(`accessDetails[${index}][pdf]`, info.uploadDocument);
      }
      formData.append(`accessDetails[${index}][documentLink]`, info.documentLink);
    });

    try {
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
      if (!id) {
        formData.append('boatId', boatId);
        await addBoatAccessInformation(formData);
        toast.success("Access information added successfully");
        setAccessInfo([{ description: '', documentName: '', uploadDocument: null, documentLink: '' }]);
      }
      else {
        formData.append('boatId', id);
        const access = await baseURL.patch('/boatAccess/update-access-info/' + id, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        toast.success("Access information updated successfully");
        localStorage.removeItem("id")
        // setAccessInfo([{ description: '', documentName: '', uploadDocument: null, documentLink: '' }]);
        setTimeout(() => {
          navigate('/Dashboard/my-boats')
        }, 3000)
      }
    } catch (error) {
      console.error("Error adding access information:", error);
      toast.error("Failed to add access information");
    }
  };
  const renderAdditionalInputs = () => {
    return accessInfo.map((info, index) => (
      <div key={index} className="relative">
        <button className="delete-btn" onClick={() => handleRemoveInfoAccess(index)}>
          <FaTimes style={{ color: 'red' }} />
        </button>
        <h1 className='font-medium text-[#4B465C] text-lg py-5'>Information & access</h1>
        <textarea
          value={info.description}
          onChange={(e) => handleInputChange(index, 'description', e.target.value)}
          cols="20" rows="5"
          placeholder='You will find my boat at the port of'
          className='border-[1.14px] border-[#D2D2D2] w-[90%] py-4 px-3 placeholder:text-[#C2C2C2] resize-none rounded-md'>
        </textarea>
        <h1 className='font-medium text-[#4B465C] text-lg py-5'>Documents sent automatically</h1>
        <select
          value={info.documentName}
          onChange={(e) => handleInputChange(index, 'documentName', e.target.value)}
          name={`docName${index}`}
          id={`docName${index}`}
          className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#C2C2C2] outline-none rounded-lg bg-[#ffff] mt-[1%]">
          <option value="">Select Document</option>
          <option value="Access map">Access map</option>
          <option value="New map">New map</option>
          <option value="Old map">Old map</option>
        </select>
        <div className='w-[90%] flex justify-between my-[2%] flex-wrap space-y-2 md:space-y-0'>
          <div className='flex flex-col gap-8 w-1/3'>
            <label htmlFor={`uploadDoc${index}`} className='text-[#4B465C] font-normal'>Upload a document</label>
            <div className='flex items-center gap-3'>
              <input
                type="file"
                id={`uploadDoc${index}`}
                className='hidden'
                onChange={(e) => handleInputChange(index, 'uploadDocument', e.target.files[0])}
              />
              <label
                htmlFor={`uploadDoc${index}`}
                className='py-4 px-16 flex gap-3 text-[#CBA557] font-bold text-sm justify-center items-center border border-[#CBA557] rounded-[10px] cursor-pointer'>
                <span><FaPlus /></span>
                <p>Browse</p>
              </label>
            </div>
          </div>
          <div className='flex flex-col gap-8 w-1/3 self-end items-center'>
            <p className='font-semibold'>- <span> OR </span> - </p>
          </div>
          <div className='flex flex-col gap-8 w-1/3'>
            <label htmlFor={`docLink${index}`} className='text-[#4B465C] font-normal'>Link to a document</label>
            <input
              type="text"
              id={`docLink${index}`}
              value={info.documentLink}
              onChange={(e) => handleInputChange(index, 'documentLink', e.target.value)}
              placeholder='www.abc.com'
              className='border-[1.35px] border-[#DBDADE] rounded-md px-4 py-4' />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <BoatsNavbar />
      <div className='mx-[1%] my-[1%] bg-white py-3'>
        <div className='mx-[4%]'>
          {renderAdditionalInputs()}
          <p className='text-[#4B465C] font-normal text-xs mb-[2%]'>Size limit: 8MB – Accepted formats: JPEG, JPG, PNG or PDF</p>
          <div className='py-2'>
            <hr className='text-[#B7B7B7] mb-[2%]' />
            <button className='py-4 px-16 flex gap-3 text-[#CBA557] font-bold text-sm justify-center items-center border border-[#CBA557] rounded-[10px]' onClick={handleAddNewInfoAccess}>
              <span><FaPlus /></span>
              <p>Add a new Information & Access</p>
            </button>
            <hr className='text-[#B7B7B7] mt-[2%]' />
          </div>
          <div className='mt-[3%]'>
            <button className='py-[10px] px-12 flex justify-center items-center bg-[#CBA557] text-white rounded-[10px]' onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoAccess;