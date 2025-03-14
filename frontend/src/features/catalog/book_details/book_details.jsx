import { useEffect, useContext, useRef } from "react";
import { useSearchParams } from "react-router-dom";

// Hook
import ModalContext from "../../../context/modal-context";
import AxiosHook from "../../../hooks/axios-interception";

// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Icon
import { CiImageOff } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

const modalInputData = [
  { id: 0, type: "text", placeholder: "Comment text", tag: "user_comment" },
];

const BookDetailsF = () => {
  const { states } = useContext(ModalContext);
  const { openModal } = states;
  const { getItems, response, isLoading, otherMethods } = AxiosHook();
  const inputRefs = useRef([]);

  const onClick = () => {
    let data = {};
    inputRefs.current.map((el) => (data[el.id] = el.value));
    data["book"] = params.get("id");
    return otherMethods("/user/comment/", "post", data);
  };

  useEffect(() => {
    getItems(`/book/${params.get("id")}`);
  }, []);

  const [params] = useSearchParams();
  const { book, comments } = response;
  return isLoading ? (
    <section>
      <Skeleton height={628} />
    </section>
  ) : (
    <section className="flex flex-col bg-white p-4">
      <section className="w-full flex max-[1000px]:flex-col mb-6 p-4 gap-4">
        <figure className="flex justify-center self-start max-w-[400px] h-[600px] flex-1 overflow-hidden max-[1000px]:self-center">
          {book.image ? (
            <img
              className="w-full h-full object-cover max-xl:object-contain object-left-top max-[500px]:object-left-bottom"
              src={book.image}
            />
          ) : (
            <CiImageOff className="text-[400px]" />
          )}
        </figure>
        <article className="flex flex-col flex-2 ">
          <h1 className="text-3xl">{book.name}</h1>
          <h2 className="text-xl">{book.category_name}</h2>
          <p>
            by{" "}
            <span className="text-blue-400 font-semibold">{book.author}</span>{" "}
            (Author)
          </p>
          <p className="flex flex-col after:content-[''] after:w-full after:border-1 after:border-gray-300 after:my-3">
            <span>
              by{" "}
              <span className="text-blue-400 font-semibold">
                {book.user_name}
              </span>{" "}
              (User)
            </span>
          </p>
          <h2 className="text-lg text-justify">{book.description}</h2>
        </article>
      </section>
      <section className="flex flex-col gap-6">
        <article className="flex justify-between relative after:border-1 after:w-full after:absolute after:border-gray-300 after:-bottom-3 items-end">
          <h1 className="text-2xl font-medium">Comments</h1>
          <button
            className="border-2 p-2 bg-[#232f3e] text-white text-4xl cursor-pointer"
            onClick={() =>
              openModal({
                type: "input",
                inputs: modalInputData,
                ref: inputRefs,
                onClick: onClick,
              })
            }
          >
            <IoMdAdd />
          </button>
        </article>
        {comments.length > 0 ? (
          comments.map((el) => (
            <article key={el.id}>
              <h2 className="text-xl text-blue-400">{el.user_name}</h2>
              <p className="text-sm text-justify">{el.user_comment}</p>
            </article>
          ))
        ) : (
          <h2 className="text-lg">No comments yet.</h2>
        )}
      </section>
    </section>
  );
};

export default BookDetailsF;
