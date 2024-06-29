import React, { useContext, useEffect, useState } from 'react'
import Profile from '../../../assets/Images/account-person.png'
import { AuthContext } from '../../../../Context/AuthContext'
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field } from 'formik';
import FormControl from '../../Form/FormControl';
import { format } from 'date-fns'
import { validationSchema, fieldClasses, languageOptions, genderOptions, nationalityOptions, initialValues } from './data';
import ChangePassword from '../../LoginSignupPopups/ChangePassword';
const AccountInfo = () => {
  const { user, updateUser } = useContext(AuthContext)
  const [values, setValues] = useState(null)
  const [active, setActive] = useState('info')
  const [file, setFile] = useState('')
  useEffect(() => {
    if (user) {
      setValues({
        username: user?.username || "",
        phoneNumber: user?.phoneNumber || "",
        dob: user?.dob || "",
        language: user?.language || "",
        gender: user?.gender || "",
        nationality: user?.nationality || "",
        address: user?.address || "",
        zip: user?.zip || "",
        state: user?.state || "",
        country: user?.country || "",
        image: user?.image || ""
      })
    }
  }, [user])
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('phoneNumber', values.phoneNumber);
    formData.append('dob', format(new Date(values.dob), 'MM/dd/yy'));
    formData.append('language', values.language);
    formData.append('gender', values.gender);
    formData.append('nationality', values.nationality);
    formData.append('address', values.address);
    formData.append('zip', values.zip);
    formData.append('state', values.state);
    formData.append('country', values.country);
    formData.append('image', file);
    updateUser(formData)
  }
  return (
    <div className=' mt-[5%] md:mt-[8%] mb-[1%] mx-[3%] md:mx-[6%]'>

      <div className=' flex flex-col md:flex-row gap-[2%]'>

        <div className='w-full h-full md:w-[22%] overflow-auto accountInfo bg-[#FFFFFF] rounded-[10px]'>
          <ul className=' flex flex-col items-center '>
            <li className='px-9 py-5 w-full it text-center font-normal hover:bg-[#CBA557] hover:bg-opacity-[8%]' onClick={() => setActive("info")}>Account Information</li>
            <li className='px-9 py-5 w-full it text-center font-normal hover:bg-[#CBA557] hover:bg-opacity-[8%]' onClick={() => setActive("password")}>Change Password</li>
            <li className='px-9 py-5 w-full it text-center font-normal hover:bg-[#CBA557] hover:bg-opacity-[8%]'>Payment Information</li>
            <li className='px-9 py-5 w-full it text-center font-normal hover:bg-[#CBA557] hover:bg-opacity-[8%]'>Logout</li>
          </ul>
        </div>

        {active == "info" && <div className='w-full md:w-[78%]'>

          <div className='accountInfo bg-[#FFFFFF] rounded-[10px]'>
            <div className=' mx-[3%] mb-[3%]'>

              <h1 className=' text-2xl py-8 font-medium text-[#4B465C] '>Profile Details</h1>
              <div className='flex gap-[4%] items-center'>
                <img src={user && values && values.image || Profile} alt="" className='w-32 border border-[#CBA557] rounded-xl' />
                <div>
                  <label htmlFor="image">
                    <button onClick={() => document.getElementById('image').click()} type='button' className='btn-5 font-medium py-1 px-4 text-sm md:text-xl md:py-3 md:px-7 rounded-lg'>
                      Upload new photo
                    </button>
                  </label>
                  <input type="file" id='image' className='hidden' onChange={(e) => setFile(e.target.files[0])} />
                  <p className='font-normal text-xl text-[#4B465C]'>Allowed JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>
              <Formik initialValues={values || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
                {
                  formik => {
                    return (
                      <>
                        <Form className="mt-[4%] mb-[2%]">
                          <section className="rounded-xl pb-6 bg-white mt-4">
                            <div className="flex gap-6 mt-4 flex-wrap md:flex-nowrap">
                              <div className="flex grow flex-col gap-2">
                                <FormControl control={"input"} name="username" label="Username" className={fieldClasses} />
                              </div>
                              <div className="flex grow flex-col gap-2">
                                <FormControl control={"input"} label="Phone Number" name="phoneNumber" className={fieldClasses} />
                              </div>
                            </div>

                            <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
                              <div className="flex w-full grow flex-col gap-2">
                                <FormControl control={"date"} name="dob" label="Date Of Birth" className={fieldClasses} />
                              </div>
                              <div className="flex grow w-full flex-col gap-2">
                                <FormControl control={"select"} label="Language" name="language" options={languageOptions} className={fieldClasses} />
                              </div>
                            </div>
                            <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
                              <div className="flex grow flex-col gap-2">
                                <FormControl control={"select"} name="gender" label="Gender" options={genderOptions} className={fieldClasses} />
                              </div>
                              <div className="flex grow flex-col gap-2">
                                <FormControl control={"select"} name="nationality" label="Nationality" options={nationalityOptions} className={fieldClasses} />
                              </div>
                            </div>

                            <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
                              <div className="flex grow flex-col gap-2">
                                <FormControl control={"input"} label="Address" name="address" className={fieldClasses} />
                              </div>
                            </div>


                            <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
                              <div className="flex w-full grow flex-col gap-2">
                                <FormControl control="input" label="Zip" name="zip" className={fieldClasses} />
                              </div>

                              <div className="flex w-full grow flex-col gap-2">
                                <FormControl control="input" label="State/Province" name="state" className={fieldClasses} />
                              </div>
                              <div className="flex grow w-full flex-col gap-2">
                                <FormControl control={"select"} name="country" label="Country" options={nationalityOptions} className={fieldClasses} />
                              </div>
                            </div>


                            <div className='flex gap-[2%]'>

                              <button type='submit' className='btn-5 font-medium py-3 px-7 text-xl'>Save Changes</button>
                              <button type='button' className='btn-5 font-medium py-3 px-7 text-xl text-[#A8AAAE] bg-[#A8AAAE] bg-opacity-15'>Cancel</button>

                            </div>


                          </section>


                        </Form>
                      </>
                    )
                  }
                }
              </Formik>
            </div>



          </div>


          <div className='accountInfo bg-[#FFFFFF] rounded-[10px]'>
            <div className=' mx-[3%] mb-[3%]'>

              <h1 className=' py-8 text-2xl font-medium text-[#4B465C]'>Delete Account</h1>

              <div className=' bg-[#CBA557] bg-opacity-[8%] border-[1.35px] border-[#FF9F43] border-opacity-[16%] py-4 px-5 rounded-lg space-y-3'>

                <p className=' text-[#CBA557] font-medium text-2xl'>Are you sure you want to delete your account?</p>
                <p className=' text-[#CBA557] font-medium text-xl'>Once you delete your account, there is no going back. Please be certain.</p>

              </div>

              <div className="flex mt-12  items-center">
                <input
                  type="checkbox"
                  id="governementID"
                  name="governementID"
                  className=" w-5 h-5 mr-4 rounded"
                />
                <label htmlFor="governementID" className=" font-normal text-xl text-[#4B465C]">
                  I confirm my account deactivation
                </label>
              </div>

              <button className='btn-5 py-3 px-7 bg-[#EA5455] font-medium text-xl deactivateBtn'>Deactivate Account</button>


            </div>
          </div>


        </div>}
        {
          active == "password" && <div className='bg-white p-8 w-full md:w-[78%]'>
            <ChangePassword />
          </div>
        }


      </div>
    </div>
  )
}

export default AccountInfo
