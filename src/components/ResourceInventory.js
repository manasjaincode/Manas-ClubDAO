import { useRef } from "react";
import { jsPDF } from "jspdf";

export default function ResourceList() {
  const pdfRef = useRef(null);

  const resources = [
    { name: "Chairs", quantity: 10 },
    { name: "Mics", quantity: 5 },
    { name: "Standees", quantity: 2 },
    { name: "Tables", quantity: 6 },
    { name: "Extension Cords", quantity: 4 },
    { name: "Spotlights", quantity: 3 },
    { name: "Backdrop", quantity: 1 },
  ];

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Resource Inventory", 10, 10);
    resources.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} - ${item.quantity}`, 10, 20 + index * 10);
    });
    doc.save("resources.pdf");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#3AA1DD] rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#3AA1DD] opacity-20 rounded-full blur-3xl"></div>
      <h1 className="text-3xl font-extrabold text-[#3AA1DD] mb-6 text-center">🎯 Resource Inventory</h1>

      <ul className="space-y-4" ref={pdfRef}>
        {resources.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-[#141414] hover:bg-[#1f1f1f] transition-all duration-300 p-4 rounded-lg border border-gray-700"
          >
            <span className="text-lg">{item.name}</span>
            <span className="text-[#3AA1DD] font-bold text-lg">{item.quantity}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleDownload}
        className="mt-8 w-full bg-[#3AA1DD] hover:bg-[#2B8BC2] transition-all duration-300 text-black font-semibold py-3 rounded-lg text-lg shadow-lg"
      >
        🚀 Download as PDF
      </button>
    </div>
  );
}
