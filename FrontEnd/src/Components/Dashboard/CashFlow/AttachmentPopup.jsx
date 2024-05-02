import { FiUpload } from 'react-icons/fi';
const AttachmentPopup = ({ cancel }) => {
  return (
    <div className="cursor-default fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-8 rounded-md space-y-3 max-w-[976px] text-left z-50">
        <h2 className="text-black text-2xl">Attachment</h2>
        <div className="border-[1.34px] px-20 text-black border-[#DBDADE] border-dashed flex flex-col items-center justify-center outline-none rounded-md py-8 w-full">
          <div className="bg-[#4B465C14] rounded-md p-1">
            <FiUpload className="text-[#4B465C] opacity-80" size={30} />
          </div>
          <h2 className="text-[#4B465C] opacity-80 my-4 font-medium text-lg">
            Drag and drop your image here
          </h2>
          <p className="mb-4 text-[#4B465C] opacity-50">or</p>
          <button className="bg-[#CBA55729] text-[--primary-color] px-8 py-2 rounded-md">
            Browse here
          </button>
        </div>

        <div className="flex gap-2 pt-12">
          <button
            className=" px-4 py-2 bg-[--primary-color] text-white rounded"
            onClick={() => {
              cancel(false);
            }}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-[#A8AAAE] text-[#A8AAAE] bg-opacity-15 rounded"
            onClick={() => {
              cancel(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default AttachmentPopup;
