import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
// import * as formik from "formik";
// import * as yup from "yup";
import { useEffect, useState } from "react";
// import fetchUsers from "../API/api";
import { fetchUsers2 } from "../API/api2";
const FormNewUser = () => {
  // const { Formik } = formik;

  // const schema = yup.object().shape({
  // })
  //     return (
  //         <>
  //         <Formik
  //         validationSchema={schema}
  //         onSubmit={console.log}
  //         initialValues={{
  //         }}
  //       >
  //         {({ handleSubmit, handleChange, values, touched, errors }) => (

  //         )}
  //     </Formik>

  //     </>
  // )



  const [users, setUsers] = useState([]);
  const [error, setError]= useState(false);


  async function testFetch(method, corps) {
    
    const userApi2= corps ? fetchUsersPost(corps) : method === 'Delete' ? fetchUsersDelete() : fetchUsersGet(); 
   
    const usersApi = await fetchUsers2(method, comp);
    setUsers(usersApi);
  
  } 
  
  useEffect(() => {
    //soumission du store
    testFetch();
    // return()=> fin de soumission
  }, []);
  
  console.log('user : ',users);
  
  return (
    <>
      <ul>
        {users.map((user, i) => {
          <li key={i}>{user}</li>;
        })}
      </ul>
    </>
  );
};

export default FormNewUser;