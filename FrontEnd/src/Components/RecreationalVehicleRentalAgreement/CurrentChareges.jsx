import React from 'react';
import { useTranslation } from 'react-i18next';

const CurrentCharges = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="mt-16 text-xl font-semibold">the price of the Lease is € *</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">All current expenses relating to use and consumption on board for the period of the lease are the responsibility of the lessee. The fuel will be paid upon return of the boat based on consumption. Alternatively, the boat must be returned with both tanks full</p>
      
      <h1 className="mt-16 text-xl font-semibold">PAYMENT</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">The consideration is paid upon delivery of the boat and can be performed in the following ways: By cash, within the limits established by current regulations on the subject By Sum up (accepted cards: Visa, Mastercard, American Express, Discover, Google and Apple Pay) Via links generated by us and sent via sms or WhatsApp via the "pay.sumup.io" portal The fee can be paid by bank transfer ( IT58Y0103013900000007008638 ) * if paying by bank transfer, please send a copy of the receipt and contact one of our representatives.*before the start of the rental The fee can be paid online through one of these platforms: Nautal Samboat Clickandboat</p>
      
      <h1 className="mt-16 text-xl font-semibold">BAD WEATHER</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">In the event of bad weather and at the discretion of the Lessee, decide whether or not to suspend the rental service.</p>
      
      <h1 className="mt-16 text-xl font-semibold">BAIL</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">The security deposit is mandatory and fixed at € 100.00 to be paid upon delivery of the vessel. This deposit will be returned, subject to the unbundling of any amounts withheld for various reasons by the lessee at the end of the rental.</p>
      
      <h1 className="mt-16 text-xl font-semibold">DELIVERY OF THE BOAT</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">The boat is delivered after a control procedure carried out in the presence of the lessee, in which the suitability and efficiency of the vehicle and all its on-board equipment are checked. After checking the boat, the Lessee must sign a Check List which certifies that the boat is delivered complete with accessories, equipment, safety equipment and equipped with the documents necessary for navigation. At the time of signing the contract, the lessee must pay the entire sum agreed for the rental. The duration of the rental is indicated in the contractual terms. DaDi Rent S.r.l.s reserves the right not to deliver or to take back possession of the boat before the terms of return established by the contract, if it deems that the driver is not able to adequately drive the boat, considering it dangerous for himself and for others or for the vehicle itself, this will in no way constitute a reason for the return of the agreed rental fee.</p>
      
      <h1 className="mt-16 text-xl font-semibold">RETURN OF THE BOAT</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">The boat must be returned to the mooring located at the bathing establishment "Onde del Tirreno Srl ex Bagni Pejani" located in viale Italia 118, 57128, Livorno (Li) within the times established in the point duration of the lease. In the event of a delay in returning the unit, the Lessee must telephone the company at one of the two numbers below within 15 minutes after the expiry of the rental period. If it is returned after the established time, the renter will be subject to the following penalty: for every 30 minutes of delay a fee of € 10.00. Upon return of the boat/boat, a check-out will be carried out, verifying that the boat and the equipment are in the same condition as at the time of delivery, as reported in the Check List signed together with the collection of the boat</p>
      {/* <h1 className="mt-16 text-xl font-semibold">{t('titleReturnBoat')}</h1> */}
      {/* <hr className="border-none h-[1px] bg-[#DBDADE] my-4" /> */}
      {/* <p className="text-lg mb-8">{t('descriptionReturnBoat2')}</p> */}
      
      <h1 className="mt-16 text-xl font-semibold">THE UNDERSIGNED LESSEE DECLARES</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">That I have read the Ordinance n.22/2012 and the Ordinance of "Security Bathing" in force for the current year, issued by the Maritime District Office of Livorno, which regulate at the local level the exercise of yachting for tourist-recreational purposes, and in particular, as regards the behavior of motor units. to know that the body of water up to 500 m from the shoreline, during the bathing season, is reserved exclusively for bathing and consequently forbidden to motor units. to know that the approach and departure of the motor units on the beach must only take place using the foreseen exit corridors at a speed not exceeding 3 knots or in the case of oars. to know that the speed limit in the coastal strip between 500m and 1000m from the shore is 10 knots, with the hull in displacement. to have been informed that I cannot sail beyond 3Mn from the coast, to have examined the boat that was delivered to me, and to receive it in excellent state of repair and equipped with all the equipment required by law and written in the check-list.</p>
      
      <h1 className="mt-16 text-xl font-semibold">INSURANCE</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">The boat is covered by an insurance policy for the risks of civil liability for damages involuntarily caused to third parties by navigation or storage in the water of the pleasure craft, the policy provides for a deductible of € 77.00 to be paid by the lessee. The insurance does not cover: damages caused to the vessel and equipment due to the lessee's fault; theft, loss or damage to things and effects owned by the lessee and those transported; transported for facts or acts unrelated to the civil liability of DaDi Rent S.r.ls</p>
      
      <h1 className="mt-16 text-xl font-semibold">THE LEASE IS GOVERNED BY THE FOLLOWING GENERAL CONDITIONS</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">If minors are on board, the Lessee will be fully responsible for their safety. The Lessee who does not collect the Vessel on the date and time booked must pay the Lessor a penalty equal to the cost of the booked rental. The boat must be returned clean, and free from any type of waste or object used during the rental, if this rule is not respected, a penalty may be applied In cases where the Lessee requests the Lessor to carry out assistance with the boat , the Lessor will apply a supplement of € 80. In the event of a delay which the Lessee notifies the Lessor within 30 minutes from the time established for the start of the lease, the Lessor will keep the Vessel at the Lessee's disposal until the time indicated as the term of the Lease, without changes in the Price. The Lessee: Is responsible for the correct use of the boat and cannot entrust it to others; will not be able to carry more than 8 people undertakes to comply with all the provisions of the regulations in force regarding navigation, safety and health protection, assuming all civil and criminal liability in the event of their violation. is solely responsible towards the people on board for any damage or injury suffered as a result of accessing and using the boat. The Lessee declares: not to navigate by motor within 200 meters. from the coast; do not sail beyond 3 miles of the coast; enter and exit the rental site using only the appropriate corridor for launching boats at minimum speed unconditionally debtor of the rental company for all sums required for repairs and/or replacements, without any opposition. The verification of the damages will take place in discussions between the parties and in case of discrepancies, by means of an expert appointed by the chartering company. Below some minimum reimbursements to be paid by the Lessee for damages and losses of the Vessel are established as follows:</p>
    </div>
  );
};

export default CurrentCharges;
