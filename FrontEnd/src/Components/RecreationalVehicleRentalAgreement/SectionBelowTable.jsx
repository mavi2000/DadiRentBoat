import './Table.css';

const SectionBelowTable = () => {
  return (
    <>
      <div className="flex gap-2 items-start">
        <input
          type="checkbox"
          id="Pursuant"
          name="Pursuant"
          className="w-5 h-5 mt-1 border-[2px] border-[#7B7B7B] accent-[--primary-color]"
        />
        <label htmlFor="Pursuant" className="text-lg">
          <span className="text-[--primary-color] underline">
            Pursuant to and for the purposes of articles 1341 and 1342 of the
            civil code
          </span>
          &nbsp;the clauses referred to in numbers are explicitly approved:
          1,2,3,4,5,6,7,8,9,10,11,12, 13,14,15.&nbsp;
          <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="flex gap-2 items-start mt-6">
        <input
          type="checkbox"
          id="ADESIONE"
          name="ADESIONE"
          className="w-5 h-5 mt-1 border-[2px] border-[#7B7B7B] accent-[--primary-color]"
        />
        <label htmlFor="ADESIONE" className="text-2xl font-semibold">
          ADESIONE AL SERVIZIO DI FIRMA GRAFOMETRICA&nbsp;
          <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="border-[1px] text-lg border-[#E8E8E8] rounded-md mt-8 p-4 h-[160px] custom-scrollbar overflow-auto">
        <p>
          Alla luce delle informazioni contenute nel documento informativo
          riportante le caratteristiche del servizio come previsto dall’articolo
          57, lettera e) delle Regole Tecniche in materia di generazione,
          apposizione e verifica delle firme elettroniche avanzate, il
          sottoscritto dichiara di al servizio di Firma Elettronica Avanzata
          realizzato mediante Firma Grafometrica al fine di sottoscrivere con
          tale modalità la documentazione per la quale.
        </p>
        <p>
          DaDi Rent S.r.l.s. renderà possibile l’utilizzo di tale modalità. Il
          sottoscritto dichiara di
        </p>
      </div>
      <div className="flex gap-12 flex-col w-full md:flex-row mt-10">
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="lastName">In faith (place and date)</label>
          <div>
            <input
              type="text"
              className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full "
              placeholder="Livorno (Li)"
            />
          </div>
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="date">Date</label>
          <div>
            <input
              type="date"
              id="date"
              name="date"
              className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionBelowTable;
