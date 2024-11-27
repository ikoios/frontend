import axios from "axios";

export const fetchUsers= async () => {
  const response = await axios({
    method: "get",
    url: "http://127.0.0.1:8000/users",
  });
  //  return response;
  // console.log('response : ',response);
    
    
}
