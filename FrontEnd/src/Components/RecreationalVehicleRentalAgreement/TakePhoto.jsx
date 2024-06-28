const TakePhoto = ({ data, setData }) => {
  const handleChange = (e) => {
    setData(prev => {
      return { ...prev, [e.target.name]: e.target.files[0] }
    })
  }
  return (
    <div className="flex mb-12 gap-8">
      <div>
        <h1 className="text-2xl text-[#383838] mb-4">Document Front</h1>
        <div className="bg-[--primary-color] rounded-lg py-2 px-7">
          <input type="file" id="docFront" name="docFront" className="hidden" onChange={handleChange} />
          <button type="button" className="text-white text-base font-bold" onClick={() => {
            document.getElementById("docFront").click()
          }}>
            Upload Photo
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-[#383838] mb-4">Document Back</h1>
        <div className="bg-[--primary-color] rounded-lg py-2 px-7">
          <input type="file" id="docBack" name="docBack" className="hidden" onChange={handleChange} />
          <button type="button" className="text-white text-base font-bold" onClick={() => {
            document.getElementById('docBack').click()
          }}>
            Upload Photo
          </button>
        </div>
      </div>
    </div>
  );
};
export default TakePhoto;
