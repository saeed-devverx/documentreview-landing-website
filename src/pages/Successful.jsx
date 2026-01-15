import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("Verifying your payment...");
  const [errorDetails, setErrorDetails] = useState("");

  useEffect(() => {
    const verifyStripePayment = async () => {
      try {
        // Get session ID from localStorage
        const sessionId = localStorage.getItem("stripe_session_id");
        
        if (!sessionId) {
          throw new Error("No payment session found. Please complete the checkout process.");
        }

        // Get token from localStorage
        const token = localStorage.getItem("token") || 
                      localStorage.getItem("access_token") || 
                      localStorage.getItem("auth_token");
        
        if (!token) {
          throw new Error("Authentication token not found. Please login again.");
        }

        // Call verification API
        const response = await fetch(`${window.location.origin}/stripe/verify-session-payment/${sessionId}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Verification failed: ${response.status}`);
        }

        const responseData = await response.json();
        
        // Check if the response contains the expected structure
        if (responseData.customer_id && 
            responseData.subscription_id && 
            responseData.status === "paid") {
          
          setVerificationStatus("success");
          setMessage("Payment verified successfully!");
          
          // Store subscription details in localStorage for future use
          localStorage.setItem("stripe_customer_id", responseData.customer_id);
          localStorage.setItem("stripe_subscription_id", responseData.subscription_id);
          localStorage.setItem("payment_status", responseData.status);
          
          // Show success popup for 3 seconds then navigate
          setTimeout(() => {
            // Clear session ID as it's no longer needed
            localStorage.removeItem("stripe_session_id");
            
            // Navigate to the external URL
            window.location.href = "https://docreviewer.devverx.us/";
          }, 3000);
          
        } else {
          // Response doesn't match expected structure
          throw new Error(
            `Payment verification incomplete. Status: ${responseData.status || "unknown"}`
          );
        }

      } catch (err) {
        console.error("Payment verification error:", err);
        setVerificationStatus("error");
        setMessage("Payment verification failed");
        setErrorDetails(err.message);
        
        // Clear invalid session ID on error
        localStorage.removeItem("stripe_session_id");
      }
    };

    // Start verification immediately when component mounts
    verifyStripePayment();

    // Cleanup function
    return () => {
      // You can add any cleanup here if needed
    };
  }, [navigate]);

  // Render different states
  const renderContent = () => {
    switch (verificationStatus) {
      case "verifying":
        return (
          <>
            <div className="text-blue-500 mb-6">
              <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-500 mx-auto"></div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Verifying Payment</h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <p className="text-sm text-gray-500">Please wait while we confirm your payment...</p>
          </>
        );

      case "success":
        return (
          <>
            <div className="text-green-500 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Verified!</h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-green-700 font-medium">Redirecting to application...</p>
              <p className="text-sm text-green-600 mt-1">You will be redirected in a few seconds</p>
            </div>
            <button
              onClick={() => window.location.href = "https://docreviewer.devverx.us/"}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 w-full"
            >
              Go to Application Now
            </button>
          </>
        );

      case "error":
        return (
          <>
            <div className="text-red-500 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Verification Failed</h1>
            <p className="text-gray-600 mb-4">{message}</p>
            {errorDetails && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <p className="text-red-700 text-sm">{errorDetails}</p>
              </div>
            )}
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 w-full"
              >
                Try Again
              </button>
              <button
                onClick={() => navigate("/plans")}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 w-full"
              >
                Back to Plans
              </button>
              <button
                onClick={() => navigate("/")}
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl transition duration-300 w-full"
              >
                Go to Home
              </button>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-lg w-full">
        {renderContent()}
      </div>
      
      {/* Optional: Add a manual redirect button that appears after a delay */}
      {verificationStatus === "verifying" && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => {
              localStorage.removeItem("stripe_session_id");
              navigate("/plans");
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition"
          >
            Cancel Verification
          </button>
        </div>
      )}
    </div>
  );
};

export default Successful;