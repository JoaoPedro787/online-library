import { useContext } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

//Components
import BookCard from "./bookCard";

// Context
import CardSizeContext from "../context/card_size";

const SwiperC = ({ data }) => {
  const { slidesPerView } = useContext(CardSizeContext);

  return (
    <Swiper
      className="w-full"
      slidesPerView={slidesPerView}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        stopOnLastSlide: true,
      }}
      grabCursor={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[FreeMode, Autoplay, Pagination]}
    >
      {data.map((el) => (
        <SwiperSlide key={el.signed_id}>
          <BookCard data={el} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperC;
