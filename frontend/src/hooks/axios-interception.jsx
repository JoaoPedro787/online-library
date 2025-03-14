import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/api/api";
import ApiErrors from "./error-handler";

import ModalContext from "../context/modal-context";

const AxiosHook = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const { states } = useContext(ModalContext);
  const { openModal } = states;

  const { h401, h400 } = ApiErrors();

  const config = (url, method, data = {}, params = {}) => {
    const token = JSON.parse(localStorage.getItem("access"));
    const config = {
      url,
      method,
      data,
      params,
      headers: { Authorization: `Bearer ${token}` },
    };
    return api(config)
      .then((res) => res)
      .catch((error) => {
        const code = error.code;
        const status = error?.response?.status;

        // Preventing status 500 or no internet user to keep using the website
        if (code === "ERR_NETWORK" || status === 500) {
          navigate("/500");
        } else {
          // Isolated handlers | 404,409 and 403 don't need isolated handlers
          const handler = { 401: h401, 400: h400 };

          const message =
            status in handler
              ? handler[status](error.response.data, config)
              : { details: [error.response.data.details] };

          openModal(message);
        }
        return Promise.reject(error);
      });
  };

  // Method only for GET
  // Modify to try again in case of 401
  const getItems = (...args) => {
    config(...args)
      .then(({ data }) => setResponse(data))
      .finally(() => setLoading(false));
  };

  // Method for POST,PUT and Delete
  const otherMethods = (...args) => {
    return config(...args).then((res) => {
      openModal({ details: [res.data.details] });

      return res.data;
    });
  };

  return { isLoading, response, getItems, otherMethods };
};

export default AxiosHook;
