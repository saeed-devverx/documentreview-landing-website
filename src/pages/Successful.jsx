import axios from "axios";

useEffect(() => {
  const verifyStripePayment = async () => {
    try {
      const sessionId = localStorage.getItem("stripe_session_id");
      if (!sessionId) {
        throw new Error("No payment session found.");
      }

      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("access_token") ||
        localStorage.getItem("auth_token");

      if (!token) {
        throw new Error("Authentication token not found.");
      }

      const response = await axios.get(
        `{https://drl-admin.devverx.us/stripe/verify-session-payment/${sessionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      if (
        data.customer_id &&
        data.subscription_id &&
        data.status === "paid"
      ) {
        setVerificationStatus("success");
        setMessage("Payment verified successfully!");

        localStorage.setItem("stripe_customer_id", data.customer_id);
        localStorage.setItem("stripe_subscription_id", data.subscription_id);
        localStorage.setItem("payment_status", data.status);

        setTimeout(() => {
          localStorage.removeItem("stripe_session_id");
          window.location.href = "https://docreviewer.devverx.us/";
        }, 3000);
      } else {
        throw new Error(`Verification incomplete. Status: ${data.status}`);
      }
    } catch (err) {
      console.error("Payment verification error:", err);

      setVerificationStatus("error");
      setMessage("Payment verification failed");

      if (axios.isAxiosError(err)) {
        setErrorDetails(
          err.response?.data?.message || "Server error occurred"
        );
      } else {
        setErrorDetails(err.message);
      }

      localStorage.removeItem("stripe_session_id");
    }
  };

  verifyStripePayment();
}, []);
