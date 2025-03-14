// Components | Assets
import Form from "./auth-form";
import bg from "./assets/register.jpg";
// Icons
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

// Data for rendering form
const data = {
  input: [
    {
      id: 0,
      type: "text",
      icon: <FaUser />,
      placeholder: "Username",
      tag: "username",
    },
    {
      id: 1,
      type: "email",
      icon: <MdEmail />,
      placeholder: "Email",
      tag: "email",
    },
    {
      id: 2,
      type: "password",
      icon: <RiLockPasswordFill />,
      placeholder: "Password",
      tag: "password",
    },
  ],
  button: {
    text: "Sign Up",
  },
  image: bg,
  title: "Get started now!",
  link: {
    title: "Have an account? Sign In!",
    redirect: "/login",
  },
};

const RegisterForm = () => {
  return <Form data={data} />;
};

export default RegisterForm;
