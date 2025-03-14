import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// Components
import { Input } from "../../components/ui/input/input";
import { SubmitButton } from "../../components/ui/button/button";

// Services
import AxiosHook from "../../hooks/axios-interception";

const Form = ({ data }) => {
  const { input, button, title, image, link, aside } = data;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { otherMethods } = AxiosHook();

  // Ref to get input values
  const inputRefs = useRef([]);

  // Conditional for register or login
  const authButton = async () => {
    const data = {};
    for (let i of inputRefs.current) {
      data[i.id] = i.value;
    }
    if (pathname === "/register") {
      return await otherMethods("auth/register/", "post", data);
    }
    // Sending tokens to localstorage
    else if (pathname === "/login") {
      const { access, refresh } = await otherMethods(
        "auth/login/",
        "post",
        data
      );

      localStorage.setItem("access", JSON.stringify(access));
      localStorage.setItem("refresh", JSON.stringify(refresh));
      return navigate("/");
    }
  };

  return (
    <form
      onSubmit={(evt) => evt.preventDefault()}
      className="flex w-full min-h-screen justify-center overflow-hidden p-4 shadow-lg bg-white"
    >
      <section className="flex flex-1 min-h-[650px] flex-col items-center justify-evenly bg-white p-8 ">
        <h1 className="text-4xl font-bold">{title}</h1>
        {input.map((el) => (
          <Input key={el.id} element={el} ref={inputRefs} />
        ))}
        <SubmitButton element={button} onClick={authButton} />
        <Link className="font-medium text-gray-500" to={link.redirect}>
          {link.title}
        </Link>
      </section>

      <section
        className="flex-1 rounded-3xl overflow-hidden bg-cover max-lg:hidden"
        style={{ backgroundImage: `url(${image})` }}
      />
    </form>
  );
};

export default Form;
