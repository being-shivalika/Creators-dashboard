import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  // step 1: Request OTP, step 2: Verify & Change Password
  const [step, setStep] = useState(1);

  const handleReceiveOtp = (e) => {
    e.preventDefault();
    // Your API call to send OTP goes here
    setStep(2);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Your API call to verify and update goes here
    console.log("Password reset submitted");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-4 text-slate-800 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {step === 1 ? (
          /* Step 1: Requesting OTP */
          <form
            onSubmit={handleReceiveOtp}
            className="animate-in fade-in duration-500"
          >
            <h1 className="text-2xl font-bold mb-2 text-center text-gray-900">
              Reset password
            </h1>
            <p className="text-slate-500 text-sm mb-8 text-center">
              Enter your email to receive a 6-digit verification code.
            </p>

            <div className="space-y-5">
              <div>
                <label className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:ring-2 ring-amber-400 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-amber-400 hover:bg-amber-500 text-white rounded-xl font-bold tracking-widest active:scale-95 transition-all shadow-md shadow-amber-200 mt-2"
              >
                SEND OTP
              </button>
            </div>
          </form>
        ) : (
          /* Step 2: Verifying OTP and Setting New Password */
          <form
            onSubmit={handleResetPassword}
            className="animate-in fade-in duration-500"
          >
            <h1 className="text-2xl font-bold mb-2 text-center text-gray-900">
              Verify OTP
            </h1>
            <p className="text-slate-500 text-sm mb-8 text-center">
              Check your inbox for the code we just sent.
            </p>

            <div className="space-y-5">
              <div>
                <label className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1 block">
                  OTP Code
                </label>
                <input
                  type="text"
                  placeholder="000000"
                  maxLength="6"
                  required
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:ring-2 ring-amber-400 focus:border-transparent outline-none transition-all text-center text-xl tracking-widest"
                />
              </div>

              <div>
                <label className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1 block">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 focus:ring-2 ring-amber-400 focus:border-transparent outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-amber-400 hover:bg-amber-500 text-white rounded-xl font-bold tracking-widest active:scale-95 transition-all shadow-md shadow-amber-200 mt-2"
              >
                UPDATE PASSWORD
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-sm text-slate-400 hover:text-slate-600 transition-colors font-medium"
              >
                ← Change Email
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <Link
            to="/login"
            className="text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
