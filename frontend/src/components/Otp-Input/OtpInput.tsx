import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpInput: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      console.log("Submitted OTP:", otpValue);
      navigate("/dashboard"); // change to desired route
    } else {
      alert("Enter full 6-digit OTP");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
      <div className="flex gap-3 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
                inputRefs.current[index] = el;
              }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-10 h-12 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default OtpInput;
