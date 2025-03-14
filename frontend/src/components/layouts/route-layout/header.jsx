import { useContext } from "react";

// Icons
import { ImBook } from "react-icons/im";
import { PiHeart, PiUserCircle } from "react-icons/pi";

// Router Dependencies
import BookGenrerContext from "../../../features/catalog/context/book_genrer";
import { Link, useNavigate } from "react-router-dom";

// Components
import { Search } from "../../ui/input/input";

const navLinks = [
  { id: 0, text: "Favorites", icon: <PiHeart />, link: null },
  { id: 1, text: "Account", icon: <PiUserCircle />, link: "/dashboard" },
];

// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Header = () => {
  const navigate = useNavigate();

  const { response, isLoading } = useContext(BookGenrerContext);

  return (
    <header className="bg-[#131a22]">
      <section className="flex m-auto justify-between w-full min-w-[300px] max-w-[1281px] text-white max-lg:flex-col gap-4 p-4 max-[320px]:px-0">
        <div className="flex gap-4 flex-1 items-center">
          <Link to={"/"}>
            <ImBook className="text-4xl" />
          </Link>
          <Search navigate={navigate} />
        </div>
        <nav className="max-lg:self-center">
          <ul className="flex gap-10 h-full">
            {navLinks.map((el, i) => (
              <Link
                key={i}
                to={el.link}
                className="flex items-center gap-1 text-lg cursor-pointer"
              >
                <span className="text-2xl"> {el.icon} </span>
                <h2>{el.text}</h2>
              </Link>
            ))}
          </ul>
        </nav>
      </section>
      {isLoading ? (
        <Skeleton
          height={40}
          borderRadius={0}
          baseColor="#4A4A4A"
          highlightColor="#6A6A6A"
        />
      ) : (
        <section className="bg-[#232f3e] text-white">
          <div className="flex justify-center m-auto max-w-[1920px]">
            {response.map((el, i) => (
              <Link
                key={i}
                className="p-3 text-sm transition-all hover:text-gray-400"
                to={`/filter/?category=${el.name}`}
              >
                {el.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
