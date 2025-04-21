import React, { useEffect, useState } from "react";

interface ProductImageProps {
  smallSrc: string;
  mediumSrc: string;
  largeSrc: string;
  alt: string;
  overlayText?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({
  smallSrc,
  mediumSrc,
  largeSrc,
  alt,
  overlayText = "Organic Food",
}) => {
  const [currentSrc, setCurrentSrc] = useState(smallSrc);

  const updateImageSrc = () => {
    const width = window.innerWidth;
    if (width <= 500) {
      setCurrentSrc(smallSrc);
    } else if (width <= 1000) {
      setCurrentSrc(mediumSrc);
    } else {
      setCurrentSrc(largeSrc);
    }
  };

  useEffect(() => {
    updateImageSrc(); // on mount
    window.addEventListener("resize", updateImageSrc); // on resize
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div className="relative w-full  overflow-hidden p-4 rounded-2xl">
      <img
        src={currentSrc}
        alt={alt}
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out rounded-2xl"
      />
    </div>
  );
};

export default ProductImage;
