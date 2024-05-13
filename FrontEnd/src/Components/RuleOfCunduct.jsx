import { IoClose } from 'react-icons/io5';
import rulesImg from '../assets/Images/rules-of-conduct.png';

const RuleOfCunduct = ({ setShowRuleOfConduct }) => {
  return (
    <div className="fixed bg-[#D9D9D9B2]  z-50 px-4 w-full left-0 top-0 h-full flex items-center justify-center">
      <div className="bg-white rounded-xl w-full md:w-4/5 px-8 pb-4 overflow-auto h-[90svh]">
        <div className="sticky top-0 -mx-8 px-8 bg-[var(--primary-color)] text-white py-3 mb-3">
          <IoClose
            onClick={() => setShowRuleOfConduct(false)}
            className="-mr-4 ml-auto cursor-pointer hover:opacity-60 text-4xl"
          />
          <h1 className="font-semibold text-2xl mb-2">
            NORME GENERALI DI COMPORTAMENTO DURANTE LA LOCAZIONE
          </h1>
        </div>
        <p>
          Di seguito si riportano alcune delle norme generali di comportamento
          durante la locazione dei natanti della società Dadi rent s.r.l.s.a. Le
          seguenti norme sono estratte dal regolamento della navigazione da
          diporto dello stato costiero Italiano
        </p>
        <ol className="my-4 pl-6 list-decimal">
          <li>
            E’ fatto divieto assoluto di portare più persone rispetto al n°
            massimo consentito dal certificato di omologazione del natante (n°8)
          </li>
          <li>
            E’ fatto divieto assoluto di navigare, ancorare od ormeggiare a meno
            di 200 metri dalla costa. Il divieto decado qualora ci si trovi a
            transitare in un corridoi di atterraggio/lancio.
          </li>
          <li>
            E’ fatto divieto assoluto di navigare ad una velocità superiore ai 3
            nodi durante la navigazione in un corridoio di lancio/atterraggio.
            E’ inoltre obbligatorio tenere la destra e tenere e consigliato
            mantenere la velocità minima di governo
          </li>
          <li>
            E’ fatto divieto assoluto di superare i 10 nodi di velocità ad una
            distanza inferiore ai 0,53 miglia nautiche (1000 metri) dalla costa
            più vicina
          </li>
          <li>
            E’ fatto divieto assoluto di navigazione a meno di 100 metri di
            distanza da una boa di segnalazione “subacqueo in mare”
          </li>
          <li>
            E’ fatto divieto assoluto di condurre il natante sotto effetto di
            sostanze stupefacenti ed alcool
          </li>
          <li>
            Il Locatario si assume gli obblighi di sicurezza delle persone
            trasportate, nei confronti di terzi e del corretto uso del natante
          </li>
          <li>
            E’ Fatto divieto di navigazione, pesca, ormeggio ed ancoraggio in
            aree marine protette ad eccezione di possedere i permessi del caso
          </li>
          <li>
            In caso di avarie e/o problemi contattare il n° emergenze in mare
            della Guardia Costiera 1530
          </li>
        </ol>
        <img
          src={rulesImg}
          alt="rules-of-conduct"
          className="w-full h-auto my-4"
        />
      </div>
    </div>
  );
};
export default RuleOfCunduct;
