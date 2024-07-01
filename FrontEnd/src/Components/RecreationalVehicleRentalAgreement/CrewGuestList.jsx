const CrewGuestList = ({ data, setData }) => {
  const handleChange = (e) => {
    setData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <div>
      <h1 className="mt-16 text-xl font-semibold">CREW/GUEST LIST</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">
        The Lessee declares that the following crew members are on board the
        chartered vessel:
      </p>
      <div className="flex flex-col my-8">
        <label htmlFor="members">
          For a total of <span className="text-red-500">*</span>
        </label>
        <div>
          <input
            id="members"
            name="members"
            value={data.members}
            onChange={handleChange}
            type="text"
            placeholder="ex: 23"
            className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
          />
          <p className="text-xs text-[#4b465caf]">
            people except the conductor
          </p>
        </div>
      </div>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4 mt-16" />
      <p className="text-lg">
        The conductor, under his own responsibility, declares to be aware of all
        the rules of coastal navigation and that he is able to navigate and
        maneuver with the aforementioned boat, furthermore declares that no
        subjects other than those specified above will be embarked. The
        conductor expressly declares to assume his own and total responsibility,
        in accordance with current regulations, with respect to events that may
        occur to third parties on board and better listed in the crew list.
      </p>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
    </div>
  );
};
export default CrewGuestList;
