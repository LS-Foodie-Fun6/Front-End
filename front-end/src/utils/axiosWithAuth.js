import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
console.log(token)
  return axios.create({
    baseURL: "https://foodiefunsix.herokuapp.com",
    headers: {
      authorization: token
    }
  });
};

export default axiosWithAuth;