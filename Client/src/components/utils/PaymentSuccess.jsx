import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PaymentSuccess() {
  const ticketRef = useRef(null);

  const downloadTicket = () => {
    const input = ticketRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
      pdf.save("ticket.pdf");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold text-green-600">
        Payment Successful 🎉
      </h2>
      <p className="mt-2">Your ticket has been confirmed!</p>

      {/* Ticket Content for PDF */}
      <div
        ref={ticketRef}
        className="mt-6 p-4 border shadow-lg text-center bg-white"
      >
        <h3 className="text-lg font-bold">E-Ticket</h3>
        <p>
          <strong>Name:</strong> Tanay
        </p>
        <p>
          <strong>From:</strong> Jabalpur
        </p>
        <p>
          <strong>To:</strong> Indore
        </p>
        <p>
          <strong>Date:</strong> 25th Feb 2025
        </p>
        <p>
          <strong>Seat : </strong> Window
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Keep this ticket for your journey.
        </p>
      </div>

      <button
        onClick={downloadTicket}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Download Ticket
      </button>
    </div>
  );
}

export default PaymentSuccess;
