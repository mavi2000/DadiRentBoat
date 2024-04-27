import React from 'react'
import Profile from '../../../assets/Images/account-person.png'

const AccountInfo = () => {


  return (
    <div className=' mt-[5%] md:mt-[8%] mb-[1%] mx-[3%] md:mx-[6%]'>

    <div className=' flex flex-col md:flex-row gap-[2%]'>  

    <div className='w-full h-full md:w-[22%] overflow-auto accountInfo bg-[#FFFFFF] rounded-[10px]'>
      <ul className=' flex flex-col items-center '>
        <li className='px-9 py-5 w-full it text-center font-normal hover:bg-[#CBA557] hover:bg-opacity-[8%]'>Account Information</li>
        <li className='px-9 py-5 w-full it text-center font-normal hover:bg-[#CBA557] hover:bg-opacity-[8%]'>Change Password</li>
        <li className='px-9 py-5 w-full it text-center font-normal hover:bg-[#CBA557] hover:bg-opacity-[8%]'>Payment Information</li>
        <li className='px-9 py-5 w-full it text-center font-normal hover:bg-[#CBA557] hover:bg-opacity-[8%]'>Logout</li>
      </ul>
    </div>

    <div className='w-full md:w-[78%]'>
      
      <div className='accountInfo bg-[#FFFFFF] rounded-[10px]'>
      <div className=' mx-[3%] mb-[3%]'>

      <h1 className=' text-2xl py-8 font-medium text-[#4B465C] '>Profile Details</h1>

      <div className=' flex mt-[3%] gap-[4%] items-center'>
        
        <img src={Profile} alt="" className=' w-32 border border-[#CBA557] rounded-xl'/>

        <div className=''>
          <button className='btn-5 font-medium py-1 px-4 text-sm md:text-xl md:py-3 md:px-7 rounded-lg'>Upload new photo</button>
          <p className=' font-normal text-xl text-[#4B465C]'>Allowed JPG, GIF or PNG. Max size of 800K</p>

        </div>

      </div>

      <form className="mt-[4%] mb-[2%]">

      <section className="rounded-xl pb-6 bg-white mt-4">
        <div className="flex gap-6 mt-4 flex-wrap md:flex-nowrap">
          <div className="flex grow flex-col gap-2">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="border-[1.35px] px-3 py-2 self-stretch border-[#DBDADE] text-[#4B465C] outline-none rounded-lg w-full"
              placeholder="John"
            />
          </div>
          <div className="flex grow flex-col gap-2">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="border-[1.35px] px-3 py-2 self-stretch border-[#DBDADE] text-[#4B465C] outline-none rounded-lg w-full"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
          <div className="flex w-full grow flex-col gap-2">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="border-[1.35px] px-3 py-2 self-stretch border-[#DBDADE] text-[#4B465C] outline-none rounded-lg w-full"
              placeholder="Select Timezone"
            />

          </div>
          <div className="flex grow w-full flex-col gap-2">
            <label htmlFor="language">Language</label>

            <select
              name="language"
              id="language"
              className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]"
            >
              <option value="Select Country">Select Language</option>
              <option value="Select Country">English</option>
            </select>


          </div>
        </div>


        <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
        <div className="flex grow w-full flex-col gap-2">
            <label htmlFor="day">Date of Birth</label>

            <select
              name="day"
              id="day"
              className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]"
            >
              <option value="Select Country">Day</option>
            </select>


          </div>

          <div className="flex grow w-full flex-col gap-2">
            <label htmlFor="month" style={{visibility:'hidden'}}>Month</label>

            <select
              name="month"
              id="month"
              className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]"
            >
              <option value="Select Country">MONTH</option>

            </select>


          </div>
          
          
          <div className="flex grow w-full flex-col gap-2">
            <label htmlFor="year" style={{visibility:'hidden'}}>Year</label>

            <select
              name="year"
              id="year"
              className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]"
            >
              <option value="Select Country">YEAR</option>
            </select>


          </div>
        </div>



        <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
          <div className="flex grow flex-col gap-2">
            <label htmlFor="Street">Gender</label>
            <select
              name="language"
              id="language"
              className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]"
            >
              <option value="Select Country">Select Gender</option>
              <option value="Select Country">Male</option>
              <option value="Select Country">Female</option>
              <option value="Select Country">Other</option>
            </select>
          </div>
          <div className="flex grow flex-col gap-2">
            <label htmlFor="City">Nationality*</label>
            <select
              name="language"
              id="language"
              className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]"
            >
              <option value="Select Country">Select Nationality</option>
              <option value="Select Country">American</option>
              <option value="Select Country">English</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
          <div className="flex grow flex-col gap-2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              className="border-[1.35px] px-3 py-2 self-stretch border-[#DBDADE] text-[#C8C8C8] outline-none rounded-lg "
              placeholder="Address"
            />
          </div>
        </div>


        <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
          <div className="flex w-full grow flex-col gap-2">
            <label htmlFor="phoneNumber">Zip Code</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="border-[1.35px] px-3 py-2 self-stretch border-[#DBDADE] text-[#4B465C] outline-none rounded-lg w-full"
              placeholder="34753"
            />

          </div>

          <div className="flex w-full grow flex-col gap-2">
            <label htmlFor="phoneNumber">State/Province</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="border-[1.35px] px-3 py-2 self-stretch border-[#DBDADE] text-[#4B465C] outline-none rounded-lg w-full"
              placeholder="California"
            />

          </div>
          <div className="flex grow w-full flex-col gap-2">
            <label htmlFor="language">Country</label>

            <select
              name="language"
              id="language"
              className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]"
            >
              <option value="Select Country">USA</option>
            </select>


          </div>
        </div>


        <div className='flex gap-[2%]'>

          <button className='btn-5 font-medium py-3 px-7 text-xl'>Save Changes</button>
          <button className='btn-5 font-medium py-3 px-7 text-xl text-[#A8AAAE] bg-[#A8AAAE] bg-opacity-15'>Cancel</button>

        </div>


      </section>
 
        
      </form>
      

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


    </div>



    </div>
    </div>
  )
}

export default AccountInfo
