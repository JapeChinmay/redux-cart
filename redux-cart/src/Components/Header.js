import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Table from "react-bootstrap/esm/Table";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { REMOVE } from "../Redux/actions/Action";

export const Header = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(REMOVE(id));
  };

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
          <NavLink to="/">Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
          </Nav>

          <Badge
            badgeContent={getData.length}
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
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rme", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurent Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => (
                    <>
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            <img
                              src={e.imgdata}
                              style={{ width: "5rem", height: "5rem" }}
                              alt="item data img"
                            />
                          </NavLink>
                        </td>

                        <td>
                          <p>{e.rname}</p>
                          <p> Price : {e.price}</p>
                          <p>Quantity : {e.qnty}</p>
                          <p
                            style={{ color: "red", fontSize: "20px" }}
                            onClick={() => dlt(e.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </p>
                        </td>
                      </tr>
                    </>
                  ))}

                  <p className="text-center"> Total : 300</p>
                </tbody>
              </Table>
            </div>
          ) : (
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
          )}
        </Menu>
      </Navbar>
    </div>
  );
};
