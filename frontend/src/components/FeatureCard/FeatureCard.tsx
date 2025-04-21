import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-green-700 text-white p-6 rounded-xl shadow-md w-full max-w-xs transition-all">
      <div className="bg-white text-green-700 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-center">{title}</h3>
    </div>
  );
};

export default FeatureCard;
