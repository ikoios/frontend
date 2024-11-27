import axios from "axios";

export const fetchUsers2 = async () => {
  const response = await axios({
    method: 'GET',
    url: `http://127.0.0.1:8000/users`,
  });
   return response.data;
}