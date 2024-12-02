import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { fetchUsersGet, fetchCurrentUser, fetchUsersPost } from "../API/api2";

const FormNewUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  async function fetchs(user) {
    // const usersApi = await fetchUsersGet(method);

    // if (user) {
    await fetchUsersPost(user);
    // } else {
    //   const currentUser = await fetchCurrentUser(1);

    //   setUsers(currentUser);
    // }

    // const currentUser = await fetchCurrentUser(method);

    // await fetchUsersPost(method, user);

    // console.log("userAPI: ", usersApi);
  }

  useEffect(() => {
    //soumission du store
    if (users.length > 0) fetchs(users);
  }, [users]);

  const { Formik } = formik;

  const schema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    phone: yup.string().required(),
    mail: yup.string().required(),
    identifier: yup.string().required(),
    password: yup.string().required(),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          setUsers(values);
        }}
        initialValues={{
          first_name: "",
          last_name: "",
          phone: "",
          mail: "",
          identifier: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="validationFormik01">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                isInvalid={!!errors.first_name}
              />
              <Form.Control.Feedback>{errors.first_name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik02">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                isInvalid={!!errors.last_name}
              />
              <Form.Control.Feedback>{errors.last_name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik02">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback>{errors.phone}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik02">
              <Form.Label>Mail</Form.Label>
              <Form.Control
                type="text"
                name="mail"
                value={values.mail}
                onChange={handleChange}
                isInvalid={!!errors.mail}
              />
              <Form.Control.Feedback>{errors.mail}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik02">
              <Form.Label>Identifiant</Form.Label>
              <Form.Control
                type="text"
                name="identifier"
                value={values.identifier}
                onChange={handleChange}
                isInvalid={!!errors.identifier}
              />
              <Form.Control.Feedback>{errors.identifier}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik02">
              <Form.Label>Mot de pass</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback>{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormNewUser;
