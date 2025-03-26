import jsPDF from "jspdf";

const GenerateReport = () => {
  const generateEventReport = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Event Report", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Date: " + new Date().toLocaleDateString(), 15, 30);
    doc.text("Faculty Name: [Your Name]", 15, 40);
    doc.text("Event Name: [Event Title]", 15, 50);
    doc.text("Location: [Event Location]", 15, 60);
    doc.text("Description: ", 15, 70);
    doc.text(
      "This is a brief description of the event conducted, including key highlights, attendance, and outcomes.",
      15,
      80,
      { maxWidth: 180 }
    );

    doc.text("Thank you,", 15, 130);
    doc.text("Faculty Signature", 15, 140);

    doc.save("Event_Report.pdf");
  };

  return (
    <button
      onClick={generateEventReport}
      className="px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition mt-4 w-full"
    >
      Generate Event Report (PDF)
    </button>
  );
};

export default GenerateReport;
