import React from 'react';
import fillipo from '../../assets/Images/fillipo.png';
import logo from '../../assets/Images/logo.png';
import { VscFilePdf } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const LastSection = ({ pageRef, data }) => {
  const { t } = useTranslation();
  const sectionRef = pageRef;

  const handleDownloadPdf = () => {
    const input = sectionRef.current;
  
    html2canvas(input, { scale: 2 }).then((canvas) => {
      console.log('Canvas dimensions:', canvas.width, canvas.height); 
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      console.log('PDF dimensions:', pdfWidth, pdfHeight); 
  
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
      console.log('Image dimensions:', imgWidth, imgHeight);
  
      let position = 0;
      let remainingHeight = imgHeight;
  
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, pdfHeight);
      remainingHeight -= pdfHeight;
  
      while (remainingHeight > 0) {
        pdf.addPage();
        position -= pdfHeight;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, pdfHeight);
        remainingHeight -= pdfHeight;
      }
  
      pdf.save('document.pdf');
    });
  };
  
  return (
    <div ref={sectionRef}>
      <p className="text-lg md:mt-24">{t('acceptanceTextUnique')}</p>

      <img
        src={fillipo}
        alt="fillipo"
        className="max-w-full md:max-w-[80%] h-[136px] mt-4 block mx-auto"
      />
      <p className="text-lg md:mt-24">
        {t('companyDetailsUnique')}
      </p>

      <img src={logo} alt="logo" className="size-[150px] mx-auto mt-16" />

      <hr className="border-none h-[1px] bg-[#DBDADE] mt-8 mb-12" />
      <div className="flex gap-4 w-full md:justify-end mb-12">
        <button
          className="flex items-center gap-2 rounded-lg px-6 py-3 bg-[#CBA55726] text-lg font-bold text-[--primary-color]"
          onClick={handleDownloadPdf}
        >
          <VscFilePdf size={25} />
          {t('downloadPdfButtonUnique')}
        </button>
        <button
          type="submit"
          className="rounded-lg px-6 py-3 bg-[--primary-color] text-lg font-bold text-white"
          disabled={!data.valid}
        >
          {t('submitButtonUnique')}
        </button>
      </div>
    </div>
  );
};

export default LastSection;
