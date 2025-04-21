import { useState, useEffect } from "react";
import organiclogo2 from "../../../assets/originallogo2.png";
// import chatLogo from "../../../assets/chatLogo.png"
const AppLogo = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(screenWidth);

  return (
    <div className="h-12 sm:h-20">
      <img src={organiclogo2} alt="" className="h-12 sm:h-20" />
    </div>
  );
};

export default AppLogo;
