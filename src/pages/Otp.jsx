import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseGlobal } from "./Context";

const Otp = () => {
  const { email } = UseGlobal();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/board"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          OTP Verification 🔒
        </h2>
        <p className="text-gray-600 mb-6">
          We've sent a 6-digit code to
          <br />
          <span className="font-semibold text-blue-600">{email}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-xl"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Verify OTP
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-6">
          Didn't receive the code?{" "}
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default Otp;
