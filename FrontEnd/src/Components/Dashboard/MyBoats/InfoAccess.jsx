import React, { useState, useContext, useEffect } from 'react';
import BoatsNavbar from './BoatsNavbar';
import { FaPlus } from "react-icons/fa";
import { AdminContext } from '../../../../Context/AdminContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseURL from '../../../../APi/BaseUrl';

const InfoAccess = () => {
  const id = localStorage.getItem('id');
  const { addBoatAccessInformation, boatId, navigate } = useContext(AdminContext);
  const [accessInfo, setAccessInfo] = useState({
    description: '',
    documentName: '',
    uploadDocument: null,
    documentLink: '',
    applyToEntireFleet: false,
    boatId: boatId
  });

  useEffect(() => {
    setAccessInfo(prevState => ({ ...prevState, boatId }));
  }, [boatId]);

  // Load existing data while editing
  useEffect(() => {
    if (id) {
      const getInfoAccess = async () => {
        try {
          const res = await baseURL('/boatAccess/get-access-info/' + id);
          const { data: { boatAccessInfo: { accessDetails } } } = res;
          const { description, documentLink, documentName, uploadDocument } = accessDetails[0];
          setAccessInfo({ description, documentLink, documentName, uploadDocument });
        } catch (error) {
          console.log(error);
        }
      }
      getInfoAccess();
    }
  }, [id]);

  const handleInputChange = (field, value) => {
    setAccessInfo(prevInfo => ({ ...prevInfo, [field]: value }));
  };

  const handleCheckboxChange = () => {
    setAccessInfo(prevInfo => ({ ...prevInfo, applyToEntireFleet: !prevInfo.applyToEntireFleet }));
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('description', accessInfo.description);
    formData.append('documentName', accessInfo.documentName);
    formData.append('boatId', accessInfo.boatId);
    if (accessInfo.uploadDocument) {
      formData.append('pdf', accessInfo.uploadDocument);
    }
    formData.append('documentLink', accessInfo.documentLink);

    try {
      if (!id) {
        await addBoatAccessInformation(formData);
        toast.success("Access information added successfully");
        setAccessInfo({ description: '', documentName: '', uploadDocument: null, documentLink: '', boatId: boatId });
      } else {
        await baseURL.patch('/boatAccess/update-access-info/' + id, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        toast.success("Access information updated successfully");
        localStorage.removeItem("id");
        setTimeout(() => {
          navigate('/Dashboard/my-boats');
        }, 3000);
      }
    } catch (error) {
      console.error("Error adding access information:", error);
      toast.error("Failed to add access information");
    }
  };

  return (
    <>
      <BoatsNavbar />
      <div className='mx-[1%] my-[1%] bg-white py-3'>
        <div className='mx-[4%]'>
          <p className='text-[#4B465C] font-normal text-md mt-5 text-center'>This information will be available to your renters once they have paid for the rental.</p>
          <p className='text-[#4B465C] font-normal text-md mt-2 text-center'>Tell them exactly how to find your boat (location in the harbour). Add all the information you consider useful for the smooth running of the rental.</p>
          <div className="relative">
            <h1 className='font-medium text-[#4B465C] text-lg py-5'>Information & access</h1>
            <textarea
              value={accessInfo.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              cols="20" rows="5"
              placeholder='You will find my boat at the port of'
              className='border-[1.14px] border-[#D2D2D2] w-[90%] py-4 px-3 placeholder:text-[#C2C2C2] resize-none rounded-md'>
            </textarea>
            <h1 className='font-medium text-[#4B465C] text-lg py-5'>Documents sent automatically</h1>
            <input
              type="text"
              value={accessInfo.documentName}
              onChange={(e) => handleInputChange('documentName', e.target.value)}
              id={`docName`}
              className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#C2C2C2] outline-none rounded-lg bg-[#ffff] mt-[1%]"
              placeholder="Document Name"
            />
            <div className='w-[90%] flex justify-between my-[2%] flex-wrap space-y-2 md:space-y-0'>
              <div className='flex flex-col gap-8 w-1/3'>
                <label htmlFor={`uploadDoc`} className='text-[#4B465C] font-normal'>Upload a document</label>
                <div className='flex items-center gap-3'>
                  <input
                    type="file"
                    id={`uploadDoc`}
                    className='hidden'
                    onChange={(e) => handleInputChange('uploadDocument', e.target.files[0])}
                  />
                  <label
                    htmlFor={`uploadDoc`}
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
                <label htmlFor={`docLink`} className='text-[#4B465C] font-normal'>Link to a document</label>
                <input
                  type="text"
                  id={`docLink`}
                  value={accessInfo.documentLink}
                  onChange={(e) => handleInputChange('documentLink', e.target.value)}
                  placeholder='www.abc.com'
                  className='border-[1.35px] border-[#DBDADE] rounded-md px-4 py-4' />
              </div>
            </div>
          </div>
          <p className='text-[#4B465C] font-normal text-xs mb-[2%]'>Size limit: 8MB – Accepted formats: JPEG, JPG, PNG or PDF</p>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="applyToEntireFleet"
              checked={accessInfo.applyToEntireFleet}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="applyToEntireFleet" className="ml-2 block text-sm text-gray-900">
              Apply this information as default setting to my entire fleet at listing creation
            </label>
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
