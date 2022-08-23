import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <div onClick={goToTop} className="scroll-top">
          <FaAngleUp />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
