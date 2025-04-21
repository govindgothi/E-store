import React, { useState } from "react";

interface DescriptionProps {
  paragraphs: string[];
  benefits: string[];
}

const ProductDescription: React.FC<DescriptionProps> = ({ paragraphs, benefits }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-[700px]">
      <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-xl font-bold text-[#4b2f1c]">Description</h2>
        <span className="text-[#4b2f1c] text-2xl">{isOpen ? "−" : "+"}</span>
      </div>

      {isOpen && (
        <div className="text-[#4b2f1c] space-y-4 text-[17px] font-semibold ">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {benefits.length > 0 && (
            <>
              <h3 className="font-bold mt-4">Benefits</h3>
              <ul className="list-disc list-inside space-y-1">
                {benefits.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
