import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useHistory } from "react-router-dom";

const NavbarComponent = () => {
  const history = useHistory();

  return (
    <Navbar expand="lg" bg="success" variant="dark">
      <NavLink className="navbar-brand" to="/" exact>
        <img
          src="./logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        Happy 888
      </NavLink>
      {/* <Navbar.Brand href="#home">
          <img
            src="./logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          Happy 888
        </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/" exact>
            หน้าแรก
          </NavLink>
          <NavLink className="nav-link" to="/Product" exact>
            สินค้า
          </NavLink>
          <NavLink className="nav-link" to="/about" exact>
            เกี่ยวกับเรา
          </NavLink>
          <NavDropdown
            title="Workshop (Pagination + CRUD)"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              onClick={() => {
                history.replace("/hospital");
              }}
            >
              ข้อมูลสถานพยาบาล
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item
              onClick={() => {
                history.replace("/category");
              }}
            >
              หมวดหมู่ข่าว (CRUD)
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink className="nav-link" to="/upload" exact>
            อัพโหลดไฟล์
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
