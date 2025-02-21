import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function Payment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/payment-success");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-4"> Payment Gateway</h2>
        <p className="text-gray-600 mb-6">
          Click the button below to start a payment.
        </p>
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? (
            <Loader2 className="animate-spin inline-block mr-2 h-4 w-4" />
          ) : (
            "Pay Now"
          )}
        </button>
      </div>
    </div>
  );
}
