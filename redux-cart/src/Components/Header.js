import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Badge from "@mui/material/Badge";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar bg="primary" variant="dark" style={{ height: "60px" }}>
        <Container>
          <Navbar.Brand href="#home">Add To Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>

          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FontAwesomeIcon
              icon={faCartPlus}
              style={{ fontStyle: "duotone", fontSize: "30px" }}
            />
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div
            className="card_details d-flex justify-content-center aligh-items-center "
            style={{ width: "20rem" }}
          >
            <i
              className="fas fa-close smallclose"
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
              onClick={handleClose}
            ></i>
            <p style={{ fontSize: 22, top: 5 }}>Your Cart is Empty</p>
          </div>
        </Menu>
      </Navbar>
    </div>
  );
};
