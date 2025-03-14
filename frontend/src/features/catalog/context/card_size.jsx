import { createContext, useEffect, useState } from "react";

const CardSizeContext = createContext({});

const CardSizeProvider = ({ children }) => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  // Media query for window's size
  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1280) setSlidesPerView(5);
    else if (width >= 1100) setSlidesPerView(4);
    else if (width >= 700) setSlidesPerView(3);
    else if (width >= 470) setSlidesPerView(2);
    else setSlidesPerView(1);
  };

  // Size effect
  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <CardSizeContext.Provider value={{ slidesPerView }}>
      {children}
    </CardSizeContext.Provider>
  );
};

export { CardSizeProvider };
export default CardSizeContext;
