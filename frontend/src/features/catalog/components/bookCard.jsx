import { Link } from "react-router-dom";
import { CiImageOff } from "react-icons/ci";

const BookCard = ({ data }) => (
  <div className="py-6 ">
    <Link
      to={`/book-details/?id=${data.signed_id}`}
      className="flex m-auto flex-col shadow-md w-[200px] h-full rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-4 hover:shadow-xl"
    >
      <figure className="flex justify-center items-center w-full h-[300px] overflow-hidden">
        {data.image ? (
          <img className="w-full h-full object-cover" src={data.image} />
        ) : (
          <CiImageOff className="text-[200px]" />
        )}
      </figure>
      <article className="flex flex-col p-2 min-h-[170px]">
        <h1 className="text-lg">{data.name}</h1>
        <h2 className="text-md text-gray-700">{data.author}</h2>
        <h2 className="text-sm text-gray-700">{data.user_name}</h2>
      </article>
    </Link>
  </div>
);

export default BookCard;
