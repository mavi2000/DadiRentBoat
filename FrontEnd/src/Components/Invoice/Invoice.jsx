import React from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import logo from "../../assets/Images/logo.png";
import { jsPDF } from "jspdf";

const Invoice = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Invoice", 20, 20);
    const img = new Image();
    img.src = logo;
    doc.addImage(img, 'PNG', 20, 30, 50, 20);
    
    // Add Invoice Details
    doc.setFontSize(10);
    doc.text("My Booking / Invoice", 20, 60);
    doc.text("Dadi Rental", 20, 70);
    doc.text("Viale Italia, 62 c/o BAGNI PANCALDI IN ACQUAVIVA", 20, 75);
    doc.text("Livorno, Italy", 20, 80);
    doc.text("+39 3701564317", 20, 85);
    doc.text("info@dadirent.it", 20, 90);
    
    doc.text("Invoice #3492", 150, 70);
    doc.text("Date Issued: 25/08/2020", 150, 75);
    doc.text("Date Due: 29/08/2020", 150, 80);
    
    doc.text("Invoice To:", 20, 100);
    doc.text("Thomas Shelby", 20, 105);
    doc.text("Small Heath, B10 0HF, UK", 20, 110);
    doc.text("718-986-6062", 20, 115);
    doc.text("peakyFBlinders@gmail.com", 20, 120);
    
    doc.text("Bill To:", 150, 100);
    doc.text("Total Due: $12,110.55", 150, 105);
    doc.text("Bank Name: Universal Bank", 150, 110);
    doc.text("Country: Italy", 150, 115);
    doc.text("IBAN: ETD95476213874685", 150, 120);
    doc.text("SWIFT Code: BR91905", 150, 125);
    
    // Add Table
    doc.text("ITEM", 20, 140);
    doc.text("COST", 100, 140);
    doc.text("QTY", 120, 140);
    doc.text("PRICE", 140, 140);

    doc.text("Boat Name", 20, 150);
    doc.text("$32", 100, 150);
    doc.text("1", 120, 150);
    doc.text("$32.00", 140, 150);

    doc.text("Skipper", 20, 160);
    doc.text("$15", 100, 160);
    doc.text("1", 120, 160);
    doc.text("$15.00", 140, 160);

    doc.text("Ticket", 20, 170);
    doc.text("$15", 100, 170);
    doc.text("1", 120, 170);
    doc.text("$15.00", 140, 170);

    // Add Totals
    doc.text("Subtotal: $154.25", 20, 190);
    doc.text("Service Charges: $10", 20, 195);
    doc.text("Discount: $0.00", 20, 200);
    doc.text("VAT: $50.00", 20, 205);
    doc.text("Total: $204.25", 20, 210);
    doc.text("Amount Paid: $204.25", 20, 215);
    doc.text("To Pay at Harbor: $204.25", 20, 220);
    
    doc.save("invoice.pdf");
  };

  return (
    <div className=" flex justify-center ">
      <div className=" mt-40 mb-20 1100px:w-[70%] 300px:w-[85%] h-[100%]   ">
        <div className="flex justify-between items-center">
          <div className="flex  gap-2  text-gray-500 1000px:text-lg 300px:text-sm ">
            <div>My Booking</div>
            <div>/</div>
            <div>Invoice</div>
          </div>
          <div 
             onClick={downloadPDF}
             className="flex items-center gap-1 bg-[#CBA557] text-white py-2 rounded-2xl px-3 cursor-pointer">
            <LiaDownloadSolid />
            <span className="1000px:text-lg 300px:text-sm">Download</span>
          </div>
        </div>
        <div className="  my-5  shadow-lg rounded-lg w-[100%] h-[100%]  ">
          <div className="my-0  w-[100%]  flex flex-col gap-5">
            <div className=" flex 800px:p-10 600px:p-8 300px:p-5 gap-3  ">
              <div className=" w-2/3 flex flex-col gap-5 ">
                <div className="flex 300px:flex-col 500px:flex-row 500px:items-center gap-3 text-[#4B465C]">
                  <img
                    className=" 900px:h-20 500px:h-17 300px:h-14 900px:w-20 500px:w-14 300px:w-14 "
                    src={logo}
                  />
                  <div className="900px:text-2xl 500px:xl 300px:lg font-medium">
                    Dadi Rental
                  </div>
                </div>
                <div className="flex flex-col gap-2 font-light 1000px:text-lg 500px:text-sm 300px:text-xs text-[#4B465C]">
                  <div>Viale Italia, 62 c/o BAGNI PANCALDI IN ACQUAVIVA</div>
                  <div>Livorno, Italy</div>
                  <div>+39 3701564317</div>
                  <div>info@dadirent.it</div>
                </div>
              </div>
              <div className=" w-1/3  text-[#4B465C] flex flex-col gap-2 ">
                <div className=" font-normal 700px:text-lg 500px:text-sm 300px:text-xs w-[100%] ">
                  Invoice #3492
                </div>
                <div className="flex justify-between w-[100%] 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs">
                  <div className="  700px:w-[50%] 300px:w-[100%] 1000px:font-light 300px:font-medium ">
                    Date Issues:
                  </div>
                  <div className=" 700px:w-[50%] 300px:w-[100%] ">
                    25/08/2020
                  </div>
                </div>
                <div className="flex justify-between w-[90%] 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                  <div className=" 700px:w-[50%] 300px:w-[100%] 1000px:font-light 300px:font-medium ">
                    Date Due:
                  </div>
                  <div className="700px:w-[50%] 300px:w-[100%] ">
                    29/08/2020
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex 700px:p-10 300px:p-3 800px:gap-3 300px:gap-2 ">
              <div className=" flex-1  flex flex-col gap-5 ">
                <div className="flex flex-col  700px:gap-3 300px:gap-2 text-[#4B465C]">
                  <div className=" font-normal 700px:text-lg 500px:text-sm 300px:text-xs w-[100%]">
                    Invoice To:
                  </div>
                  <div className=" 1000px:text-lg 700px:text-sm 300px:text-xs w-[100%]">
                    <div className=" font-light">Thomas shelby</div>
                    <div className=" font-light">Small Heath, B10 0HF, UK</div>
                    <div className=" font-light">718-986-6062</div>
                    <div className=" font-light">peakyFBlinders@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className=" flex-1  text-[#4B465C] flex flex-col gap-2 ">
                <div className="flex flex-col  gap-3 text-[#4B465C]">
                  <div className="font-normal 700px:text-lg 500px:text-sm 300px:text-xs w-[100%]">
                    Bill To:
                  </div>
                  <div className="text-[#4B465C]">
                    <div className=" w-[90%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                      <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium ">
                        Total Due:
                      </div>
                      <div className="font-light 900px:w-[50%] 300px:w-[100%]">
                        $12,110.55
                      </div>
                    </div>
                    <div className=" w-[90%]  flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                      <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                        Bank name:
                      </div>
                      <div className="900px:w-[50%] 300px:w-[100%] font-light">
                        Universal Bank
                      </div>
                    </div>
                    <div className=" w-[90%]  flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                      <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                        Country:
                      </div>
                      <div className=" 900px:w-[50%] 300px:w-[100%]  font-light">
                        Italy
                      </div>
                    </div>
                    <div className=" w-[90%]  flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                      <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                        IBAN:
                      </div>
                      <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                        ETD95476213874685
                      </div>
                    </div>
                    <div className=" w-[90%]  flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs  ">
                      <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                        SWIFT code:
                      </div>
                      <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                        BR91905
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-3 border border[#DBDADE] text-[#4B465C]">
            <div className="flex  w-[100%] ">
              <div className="w-[50%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                ITEM
              </div>
              <div className="w-[15%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                COST
              </div>
              <div className="w-[15%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                QTY
              </div>
              <div className="w-[20%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                PRICE
              </div>
            </div>
            <div className="flex w-[100%] ">
              <div className="w-[50%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                Boat Name
              </div>
              <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                $32
              </div>
              <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                1
              </div>
              <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                $32.00
              </div>
            </div>
            <div className="flex w-[100%] ">
              <div className="w-[50%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                Skipper
              </div>
              <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                $15
              </div>
              <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                1
              </div>
              <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                $15.00
              </div>
            </div>
            <div className="flex w-[100%] ">
              <div className="w-[50%] border-b border[#DBDADE] 900px:text-lg 500px:text-sm 300px:text-xs p-3">
                Ticket
              </div>
              <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                $15
              </div>
              <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                1
              </div>
              <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                $15.00
              </div>
            </div>
          </div>
          <div className=" flex 900px:p-10 300px:p-6 gap-3 ">
            <div className=" flex-1 flex-col gap-5 ">
              <div className="flex items-center gap-3 text-[#4B465C]">
                <div className="text-[#FF6347] 900px:text-lg 300px:text-sm ">
                  Fuel is not included*
                </div>
              </div>
            </div>
            <div className=" flex-1  text-[#4B465C] text-sm flex flex-col gap-2 ">
              <div className="flex flex-col gap-3 text-[#4B465C]">
                <div className="text-[#4B465C] flex w-[100%] flex-col">
                  <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                    <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                      Subtotal:
                    </div>
                    <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                      $154.25
                    </div>
                  </div>
                  <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                    <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                      Service Charges:
                    </div>
                    <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                      $10{" "}
                    </div>
                  </div>
                  <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                    <div className="900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                      Discount:
                    </div>
                    <div className="900px:w-[50%] 300px:w-[100%] font-light">
                      $00.00
                    </div>
                  </div>
                  <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs">
                    <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                      VAT:
                    </div>
                    <div className="900px:w-[50%] 300px:w-[100%] font-light">
                      $50.00
                    </div>
                  </div>
                  <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                    <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                      Total:
                    </div>
                    <div className="900px:w-[50%] 300px:w-[100%] font-light">
                      $204.25
                    </div>
                  </div>
                  <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                    <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                      Amount Paid
                    </div>
                    <div className=" 900px:w-[50%] 300px:w-[100%] font-light">
                      $204.25
                    </div>
                  </div>
                  <div className=" w-[100%] flex justify-between 700px:flex-row 300px:flex-col font-light 1000px:text-lg 500px:text-sm 300px:text-xs ">
                    <div className=" 900px:w-[50%] 300px:w-[100%] 900px:font-light 300px:font-medium">
                      To Pay at Harbor
                    </div>
                    <div className="900px:w-[50%] 300px:w-[100%] font-light">
                      $204.25
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
