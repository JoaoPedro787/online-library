import { useContext } from "react";
import BookGenrerContext from "../../../features/catalog/context/book_genrer";

import ByCategory from "../../../features/catalog/by_category/by_category";

const App = () => {
  const { response } = useContext(BookGenrerContext);

  return (
    <>
      <section className="flex flex-col gap-10">
        {response.length > 0 &&
          response.map((el) => <ByCategory key={el.id} category={el.name} />)}
      </section>
    </>
  );
};

export default App;
