import { useNavigate } from "react-router-dom";
import api from "../lib/api/api";

const ApiErrors = () => {
  const navigate = useNavigate();
  const h401 = (error) => {
    navigate("/login");
    localStorage.removeItem("access");
    return { details: [error.messages[0].message, "Please Sign In again!"] };
  };

  const h400 = (error) => {
    const capitalize = (key) => {
      return String(key[0]).toUpperCase() + String(key).slice(1);
    };

    const messages = Object.entries(error).map(
      ([key, value]) => `${capitalize(key)}: ${value[0]}`
    );

    return { details: messages };
  };

  return { h401, h400 };
};

export default ApiErrors;
