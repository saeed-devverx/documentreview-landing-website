import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const ChosePlan = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingPlan, setProcessingPlan] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem("token") || 
                      localStorage.getItem("access_token") || 
                      localStorage.getItem("auth_token");
        
        if (!token) {
          throw new Error("Authentication token not found. Please login first.");
        }

        const response = await fetch("https://drl-admin.devverx.us/client/plans/", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 401) {
          throw new Error("Unauthorized - Invalid or expired token");
        }

        if (response.status === 403) {
          throw new Error("Forbidden - You don't have permission to access plans");
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Transform API data to match your component structure
        const transformedPlans = data.data.map((plan) => {
          // Determine plan type based on your logic
          let planType = "basic";
          if (plan.plan_type.includes("pro+")) {
            planType = "popular";
          } else if (plan.plan_type.includes("partner") || plan.plan_type.includes("practice")) {
            planType = "enterprise";
          }

          // Create button text
          let buttonText = "Select";
          
          // Create description based on plan
          let description = "";
          if (plan.price === 0) {
            description = "Perfect for testing the platform with limited access.";
          } else if (planType === "popular") {
            description = "Best value for growing teams with premium features.";
          } else {
            description = "Advanced features for professional teams.";
          }

          // Create includes array based on plan features
          const includes = [];
          includes.push(`${plan.users_limit} user accounts`);
          
          if (plan.price > 0) {
            includes.push("Full candidate access");
            includes.push("Priority support");
          } else {
            includes.push("Basic access");
          }

          if (planType === "popular" || planType === "enterprise") {
            includes.push("Advanced analytics");
          }
          
          if (planType === "enterprise") {
            includes.push("Custom integrations");
            includes.push("Dedicated account manager");
          }

          // Create limitations for free tier
          const limitations = [];
          if (plan.price === 0) {
            limitations.push("Limited candidate profiles");
            limitations.push("Standard support only");
            limitations.push("No custom integrations");
          }

          return {
            id: plan.id,
            name: plan.name,
            price: plan.price === 0 ? "Free" : `$${plan.price}`,
            period: plan.price === 0 ? "" : "/month",
            description: description,
            buttonText: buttonText,
            type: planType,
            includes: includes,
            limitations: limitations,
            originalData: plan
          };
        });

        // Sort plans by price (free first, then ascending)
        transformedPlans.sort((a, b) => {
          if (a.price === "Free") return -1;
          if (b.price === "Free") return 1;
          return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
        });

        setPlans(transformedPlans);
      } catch (err) {
        console.error("Error fetching plans:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error);
      throw new Error("Invalid token format");
    }
  };

  const handleStripeCheckout = async (plan) => {
    try {
      setProcessingPlan(plan.id);
      
      // Get token from localStorage
      const token = localStorage.getItem("token") || 
                    localStorage.getItem("access_token") || 
                    localStorage.getItem("auth_token");
      
      if (!token) {
        throw new Error("Authentication token not found");
      }

      // Decode token to get user ID
      const decodedToken = decodeToken(token);
      const userId = decodedToken.user_id || decodedToken.sub || decodedToken.id;
      
      if (!userId) {
        throw new Error("User ID not found in token");
      }

      // Prepare request body
      const requestBody = {
        user_id: userId,
        plan_id: plan.id,
success_url: `${window.location.origin}/successful`,
        cancel_url: "https://drl-frontend.devverx.us/" // or your specific cancel URL
      };

      // Call Stripe checkout API
      const response = await fetch("https://drl-admin.devverx.us/client/stripe/checout_session", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      
      // Store session ID in localStorage
      if (responseData.data && responseData.data.id) {
        localStorage.setItem("stripe_session_id", responseData.data.id);
      }

      // Open Stripe checkout URL in new tab
      if (responseData.data && responseData.data.url) {
        window.open(responseData.data.url, "_blank");
      } else {
        throw new Error("No checkout URL received from server");
      }

    } catch (err) {
      console.error("Error processing checkout:", err);
      alert(`Checkout failed: ${err.message}`);
    } finally {
      setProcessingPlan(null);
    }
  };

  const handleButtonClick = async (plan) => {
    if (plan.price === "Free") {
      // Handle free plan selection
      alert(`Selected ${plan.name} plan`);
      // You can add API call here for free plan selection
    } else {
      // Handle paid plan - start Stripe checkout
      await handleStripeCheckout(plan);
    }
  };

  const handleLoginRedirect = () => {
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <section className="bg-gray-50 py-30 md:px-4 max-sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading plans...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 py-30 md:px-4 max-sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Error: {error}</p>
            {error.includes("token") || error.includes("login") || error.includes("Unauthorized") ? (
              <div>
                <p className="text-gray-600 mb-4">Please login to view plans</p>
                <button 
                  onClick={handleLoginRedirect}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Go to Login
                </button>
              </div>
            ) : (
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Retry
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-30 md:px-4 max-sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
          Choose the plan that fits your team
        </h1>

        {/* Processing Loader Overlay */}
        {processingPlan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Processing your selection...</p>
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                ${
                  plan.type === "enterprise"
                    ? "bg-gray-900 text-white"
                    : "bg-white"
                }
                ${
                  plan.type === "popular"
                    ? "border-2 border-purple-600"
                    : "border border-gray-200"
                }`}
            >
              {/* Badge */}
              {plan.type === "popular" && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              
              {plan.price === "Free" && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-400 text-black text-xs font-bold px-4 py-1 rounded-full">
                  FREE
                </span>
              )}

              {/* Title */}
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  plan.type === "enterprise"
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="ml-2 text-sm opacity-70">{plan.period}</span>
                )}
              </div>

              {/* Button */}
              <button
                onClick={() => handleButtonClick(plan)}
                disabled={processingPlan === plan.id}
                className={`w-full py-3 rounded-xl font-semibold mb-8 transition flex items-center justify-center
                  ${
                    processingPlan === plan.id
                      ? "bg-gray-400 cursor-not-allowed"
                      : plan.type === "basic" || plan.price === "Free"
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : plan.type === "popular"
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
              >
                {processingPlan === plan.id ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  plan.buttonText
                )}
              </button>

              {/* Includes */}
              <ul className="space-y-3">
                {plan.includes.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start text-sm ${
                      plan.type === "enterprise"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    <span className="mr-3 text-green-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Limitations */}
              {plan.limitations.length > 0 && (
                <>
                  <hr className="my-6" />
                  <ul className="space-y-3">
                    {plan.limitations.map((item, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start text-sm ${
                          plan.type === "enterprise"
                            ? "text-gray-400"
                            : "text-gray-500"
                        }`}
                      >
                        <span className="mr-3 text-red-500 font-bold">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChosePlan;