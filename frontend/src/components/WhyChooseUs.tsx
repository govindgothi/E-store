import React from "react";
import { Leaf, Handshake, BadgeCheck, FlaskConical } from "lucide-react"; // You can change to your preferred icon set

const WhyChooseUs = () => {
  const data = [
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: "High Nutritional Value",
      desc: "Organic foods preserve far more natural vitamins and minerals",
    },
    {
      icon: <Handshake className="w-10 h-10 text-green-600" />,
      title: "Preserves the Environment",
      desc: "Sustainable farming ensures soil conservation & reduced air pollution",
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-green-600" />,
      title: "Certified Organic Sources",
      desc: "Our products are strictly quality controlled and independently verified",
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-green-600" />,
      title: "No Chemicals & Pesticides",
      desc: "We don’t use artificial fertilisers or additives in our food",
    },
  ];

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full px-4">
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-5xl">
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {data.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-4 border rounded-lg shadow-md w-full text-center"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-green-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {data.slice(2, 4).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-4 border rounded-lg shadow-md w-full text-center"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-green-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
