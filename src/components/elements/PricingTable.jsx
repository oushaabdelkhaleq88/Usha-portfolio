import React from "react";

export default function Order() {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      features: [
        "1 Project",
        "Basic Support",
        "5 Revisions",
        "Email Communication",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      name: "Pro",
      price: "$49",
      features: [
        "5 Projects",
        "Priority Support",
        "Unlimited Revisions",
        "Zoom Calls + Email",
      ],
      color: "from-blue-400 to-blue-600",
      popular: true,
    },
    {
      name: "Business",
      price: "$99",
      features: [
        "Unlimited Projects",
        "Dedicated Support",
        "Unlimited Revisions",
        "24/7 Communication",
      ],
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-8 shadow-lg bg-gradient-to-br ${plan.color} relative overflow-hidden`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                Popular
              </span>
            )}
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl hover:opacity-90 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
