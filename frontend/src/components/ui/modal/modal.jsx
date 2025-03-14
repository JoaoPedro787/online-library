import { IoIosClose } from "react-icons/io";

import { Button } from "../button/button";
import { InputModal, SelectModal } from "../input/input";

const Modal = ({ defaultOnClick, config }) => {
  const {
    type = "alert",
    onClick,
    details = null,
    inputs = null,
    select = null,
    ref = null,
  } = config;

  const buttonElements =
    type !== "alert"
      ? [
          {
            id: 0,
            text: "Cancel",
            color: "bg-gray-500",
            action: defaultOnClick,
          },
          { id: 1, text: "Confirm", color: "bg-blue-500", action: onClick },
        ]
      : [{ id: 0, text: "Ok", color: "bg-blue-500", action: defaultOnClick }];

  return (
    // Overlay
    <div className="flex absolute z-50 w-full h-full bg-[rgba(0,0,0,0.5)] justify-center items-center">
      {/* Modal */}
      <div className="flex flex-col bg-white w-[90%] max-w-[500px] rounded-xl p-4">
        <section className="flex justify-between items-center flex-1 border-b-1 border-gray-300 pb-6">
          <h1 className="font-bold text-2xl">
            {type !== "alert" ? "Are you sure?" : "Information"}
          </h1>
          <button className="cursor-pointer" onClick={defaultOnClick}>
            <IoIosClose className="text-4xl text-gray-400" />
          </button>
        </section>
        <section className="flex-2 border-b-1 pb-6 pt-6 border-gray-300 text-gray-700 flex flex-col gap-2">
          {inputs &&
            inputs.map((el, i) => (
              <InputModal element={el} key={i} ref={ref} />
            ))}

          {select && (
            <select
              className="w-full p-3 text-gray-400 border-1 border-slate-400 rounded-lg text-lg"
              ref={(el) => (ref.current[inputs.length] = el)}
              id="category"
            >
              {select.map((el, i) => (
                <SelectModal element={el} key={i} ref={ref} />
              ))}
            </select>
          )}

          {details && details.map((el, i) => <p key={i}>{el}</p>)}
        </section>
        <section className="flex pt-6 justify-end gap-2 flex-1 max-[500px]:[&>*]:flex-1 max-[500px]:[&>*]:px-0">
          {buttonElements.map((el) => (
            <Button key={el.id} element={el} onClick={el.action} />
          ))}
        </section>
      </div>
    </div>
  );
};

export { Modal };
