import { useRef } from "react";
import { ImSearch } from "react-icons/im";

// For using input, is necessary to send the element and a ref array
const Input = ({ element, ref }) => {
  const { icon, type, placeholder, id, tag } = element;

  return (
    <div className="flex w-[400px] overflow-hidden items-center p-2 border-b-1 border-slate-300 max-[420px]:w-[300px]">
      {icon && <span className="text-2xl"> {icon} </span>}
      <input
        id={tag}
        type={type}
        ref={(el) => (ref.current[id] = el)}
        className="flex-1 p-2 outline-0 text-xl"
        placeholder={placeholder}
      />
    </div>
  );
};

const InputModal = ({ element, ref }) => {
  const { type, placeholder, id, tag } = element;
  return (
    <input
      id={tag}
      type={type}
      className="flex w-full p-2 border-1 border-slate-400 rounded-lg text-lg"
      ref={(el) => (ref.current[id] = el)}
      placeholder={placeholder}
    />
  );
};

const SelectModal = ({ element }) => (
  <option value={element.id}>{element.placeholder}</option>
);
const Search = ({ navigate }) => {
  const searchRef = useRef({});

  const handleSearch = (evt) =>
    evt.key === "Enter" &&
    (searchRef.current.value != ""
      ? navigate(`/filter/?search=${searchRef.current.value}`)
      : navigate("/"));

  return (
    <div className="flex items-center p-3 flex-1 h-full overflow-hidden rounded-lg bg-white text-gray-700">
      <input
        placeholder="Search"
        className="w-full h-full outline-0 pr-2"
        type="text"
        ref={searchRef}
        onKeyDown={(evt) => handleSearch(evt)}
      />
      <ImSearch />
    </div>
  );
};

export { Input, Search, InputModal, SelectModal };
