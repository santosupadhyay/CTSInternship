import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state)=>state.auth);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(register(formData));

    if (register.fulfilled.match(result)) {
      navigate("/auth/login");
    }
  };

  // Progress titles
  const steps = ["Personal Info", "Credentials", "Contact Info"];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        {/* Title */}

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <h1 className="text-3xl font-extrabold text-center text-blue-700">
              Register Here
            </h1>
            <p className="text-gray-500 text-center mt-2">
              Complete all steps to create your account
            </p>

            {/* Progress bar */}
            <div className="flex items-center justify-between mt-6 mb-8 relative">
              {steps.map((label, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  {/* Circle */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                      step === index + 1
                        ? "bg-blue-600"
                        : step > index + 1
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-xs mt-2 text-gray-600">{label}</span>
                </div>
              ))}
              {/* Connector line */}
              <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
            </div>

            {/* Step Content */}
            <div className="mt-6">
              {step === 1 && (
                <Step1
                  formData={formData}
                  setFormData={setFormData}
                  title="Personal Info"
                />
              )}
              {step === 2 && (
                <Step2
                  formData={formData}
                  setFormData={setFormData}
                  title="Credentials"
                />
              )}
              {step === 3 && (
                <Step3
                  formData={formData}
                  setFormData={setFormData}
                  title="Contact Info"
                />
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="px-5 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={nextStep}
                  className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md"
                >
                  Submit
                </button>
              )}
              {step === 3 && error && (
                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
