import { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

// Components
import BookCard from "../components/bookCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Hooks
import AxiosHook from "../../../hooks/axios-interception";
import CardSizeContext from "../context/card_size";

const SearchBookF = () => {
  const { slidesPerView } = useContext(CardSizeContext);
  const [params] = useSearchParams();
  const { getItems, response, isLoading } = AxiosHook();

  useEffect(() => {
    const query = new URLSearchParams(params).toString();
    getItems(`/book/?${query}`);
  }, [params]);

  return isLoading ? (
    <section>
      <Skeleton height={600} borderRadius={"1em"} />
    </section>
  ) : (
    <section className="bg-white p-4 rounded-xl">
      <article className="flex flex-col">
        <h1 className="text-2xl font-bold">Results for</h1>
        <span className="flex gap-2 text-lg">
          {[...params].map(([_key, value], i) => (
            <p key={i}>"{value}"</p>
          ))}
        </span>
        <p className="text-lg">{response.length} Result(s) </p>
      </article>
      <section
        className="grid "
        style={{
          gridTemplateColumns: `repeat(${slidesPerView}, minmax(0, 1fr))`,
        }}
      >
        {response.map((el) => (
          <BookCard data={el} key={el.signed_id} />
        ))}
      </section>
    </section>
  );
};

export default SearchBookF;
