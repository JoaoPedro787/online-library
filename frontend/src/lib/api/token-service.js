import api from "./api";

const refreshToken = () => {
  const refresh = JSON.parse(localStorage.getItem("refresh"));
  return api.post("api/token/refresh/", { refresh });
};

export { refreshToken };
