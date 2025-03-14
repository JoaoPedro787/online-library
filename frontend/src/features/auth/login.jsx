// Components | Assets
import bg from "./assets/login.jpg";
import Form from "./auth-form";

// Icons
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const data = {
  input: [
    {
      id: 0,
      type: "text",
      icon: <FaUser />,
      placeholder: "Username or Email",
      tag: "access",
    },
    {
      id: 1,
      type: "password",
      icon: <RiLockPasswordFill />,
      placeholder: "Password",
      tag: "password",
    },
  ],
  button: {
    text: "Sign In",
  },
  image: bg,
  title: "Welcome back!",
  link: { title: "Don't have an account? Sign Up!", redirect: "/register" },
};

const LoginForm = () => {
  return <Form data={data} />;
};

export default LoginForm;
