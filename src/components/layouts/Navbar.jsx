import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";

const Navbar = ({ datas }) => {
  return (
    <>
      <Nav>
        {Object.entries(datas).map(([key, value]) => (
          <Nav.Item key={key}>
            <Link to={value}>{key}</Link>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

export default Navbar;
