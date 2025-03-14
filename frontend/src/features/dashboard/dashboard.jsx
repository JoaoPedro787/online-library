import { useEffect, useContext, useRef } from "react";
import Swiper from "../catalog/components/swiper";

// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Icon
import { IoMdAdd } from "react-icons/io";

// Hooks
import ModalContext from ".././../context/modal-context";
import BookGenrerContext from "../catalog/context/book_genrer";
import AxiosHook from "../../hooks/axios-interception";

const DashboardF = () => {
  const { states } = useContext(ModalContext);
  const genres = useContext(BookGenrerContext);
  const { openModal } = states;
  const { getItems, isLoading, response, otherMethods } = AxiosHook();
  const inputRefs = useRef([]);

  useEffect(() => {
    getItems("/user/book/", "get");
  }, []);

  const { books, user } = response;

  const modalInputData = [
    { id: 0, type: "text", placeholder: "Book name", tag: "name" },
    { id: 1, type: "textarea", placeholder: "Description", tag: "description" },
    { id: 2, type: "url", placeholder: "Image URL", tag: "image" },
    { id: 3, type: "text", placeholder: "Author", tag: "author" },
  ];

  const modalSelectData = genres.response.map((el) => {
    return {
      id: el.id,
      placeholder: el.name,
    };
  });

  const onClick = () => {
    let data = {};
    inputRefs.current.map((el) => (data[el.id] = el.value));
    return otherMethods("/user/book/", "post", data);
  };

  return isLoading ? (
    <section>
      <Skeleton height={626} />
    </section>
  ) : (
    <section className="flex flex-col gap-4 bg-white p-4">
      <article className="flex w-full">
        <section className="flex flex-col">
          <h1 className="text-3xl">{user.username}</h1>
          <h2 className="text-lg">{user.email}</h2>
        </section>
        <section className="flex items-center justify-end w-full gap-2">
          <p className="text-lg">Add a new book</p>
          <button
            className="border-2 p-2 bg-[#232f3e] text-white text-4xl cursor-pointer"
            onClick={() =>
              openModal({
                type: "input",
                inputs: modalInputData,
                select: modalSelectData,
                ref: inputRefs,
                onClick: onClick,
              })
            }
          >
            <IoMdAdd />
          </button>
        </section>
      </article>
      <div>
        <h1 className="text-xl">
          My products: <span className="text-blue-400">(Click to edit)</span>
        </h1>
        <Swiper data={books} />
      </div>
    </section>
  );
};

export default DashboardF;
