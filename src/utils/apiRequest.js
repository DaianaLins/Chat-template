import axios from "axios";
export const doLogin = user => {
  return axios({
    method: "POST",
    url: '',
    headers: { "Content-Type": "application/json" },
    data: user
  });
};

export const searchProtocol = token => {
  return axios({
    method: "GET",
    url: '',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  });
};