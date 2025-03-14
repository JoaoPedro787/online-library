import { useEffect } from "react";

// Api
import AxiosHook from "../../../hooks/axios-interception";

// Components
import SwiperC from "../components/swiper";

// Skeleton
import CategorySkeleton from "./skeleton";

const ByCategory = ({ category }) => {
  const { getItems, response, isLoading } = AxiosHook();
  useEffect(() => {
    getItems(`/book/?category=${category}`);
  }, []);

  // Filtering empty categories
  return isLoading ? (
    <CategorySkeleton />
  ) : (
    response.length > 0 && (
      <section className="flex flex-col gap-3 bg-white p-4 rounded-xl">
        <h1 className="text-xl font-bold">{category}</h1>
        {/* Swiper container */}
        <SwiperC data={response} />
      </section>
    )
  );
};

export default ByCategory;
