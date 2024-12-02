import axios from "axios";

export const fetchUsersGet = async () => {
  const response = await axios({
    method: "GET",
    url: "http://127.0.0.1:8000/users",
  });

  return response.data;
};

export const fetchCurrentUser = async (id) => {
  const response = await axios({
    method: "GET",
    url: `http://127.0.0.1:8000/users/${id}`,
  });

  return response.data;
};

export const fetchUsersPost = async (user) => {
  const response = await axios({
    method: "POST",
    url: "http://127.0.0.1:8000/newUser",
    data: user,
  });

  return response;
};
